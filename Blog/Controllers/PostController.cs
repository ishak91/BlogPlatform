using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Blog.Data.Entity;
using Blog.Core.Business;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Cors;
using Blog.Common.ViewModel;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Blog.Controllers
{

    [Route("api/[controller]")]
    public class PostController : Controller
    {
        private readonly IPostManager _postManager;
        private readonly IMediaFileManager _mediaManager;
        private readonly ILogger<PostController> _logger;

        public PostController(IPostManager postManager, ILogger<PostController> logger, IMediaFileManager mediaManager)
        {
            _postManager = postManager;
            _mediaManager = mediaManager;
            _logger = logger;
        }

        // GET: api/values
        [HttpGet]
        public ActionResult GetAll()
        {
            var posts = _postManager.GetAll();
            return Json(posts);
        }


        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPost(int id)
        {
            var post = await _postManager.GetPostAsync(id);

            var postModel = new
            {
                post.Id,
                post.PostTitle,
                post.Content,
                post.PostStatus,
                post.Permerlink,
                coverImage=new {
                    post.CoverImage.Id,
                    post.CoverImage.FileName
                }
            };

            return Json(postModel);
        }

        // POST api/values
        [HttpPost]
        public async Task<IActionResult> ManagePost([FromBody]PostViewModel post)
        {
            int id = 0;
            try
            {
                if (post.Id == 0)
                {
                post.Id= _postManager.CreateNewPost(new Post {
                        PostTitle=post.PostTitle,
                        Content=post.Content,
                        Permerlink=post.Permerlink,
                        PostStatus=post.PostStatus,
                        CoverImageId = post.CoverImage!=null ?(int?)post.CoverImage.Id : null
                    });
                }
                else
                {
                   Post updateModel=await _postManager.GetPostAsync(post.Id);

                    updateModel.PostTitle = post.PostTitle;
                    updateModel.Content = post.Content;
                    updateModel.Permerlink = post.Permerlink;
                    updateModel.PostStatus = post.PostStatus;
                    updateModel.CoverImageId = post.CoverImage != null ? (int?)post.CoverImage.Id : null;


                   _postManager.UpdatePost(updateModel);
                }
             
                return CreatedAtAction("GetPost", new { id = id }, post);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.StackTrace);

                return new StatusCodeResult(500);
            }

        }



        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePost(int id, [FromBody]Post post)
        {
            Post originalPost =await _postManager.GetPostAsync(id);

            originalPost.PostTitle = post.PostTitle;
            originalPost.Content = post.Content;
            post.LastUpdatedDate = DateTime.Now;

            _postManager.UpdatePost(originalPost);

            return CreatedAtAction("GetPost", new { id }, originalPost);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult RemovePost(int id)
        {
            Post post = _postManager.GetPost(id);

            _postManager.RemovePost(post);

            var deleteObj = new {
                id,
                post.PostTitle,
                postStatus="Deleted"

            };

            return Json(deleteObj);
        }
    }
}
