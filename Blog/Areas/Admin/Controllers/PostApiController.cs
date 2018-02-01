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
using Blog.Common.DTO;
using Blog.Common.Wrappers;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Blog.Areas.Admin.Controllers
{

    [Route("api/admin/post")]
    public class PostApiController : Controller
    {
        private readonly IPostManager _postManager;
        private readonly IMediaFileManager _mediaManager;
        private readonly ILogger<PostApiController> _logger;

        public PostApiController(IPostManager postManager, ILogger<PostApiController> logger, IMediaFileManager mediaManager)
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
            var post = await _postManager.GetAsync(id);

            var postModel = new
            {
                post.Id,
                post.PostTitle,
                post.Content,
                post.PostStatus,
                post.Permerlink,
                coverImage=post.CoverImageId!=null ? Url.Action("PostCoverImage",new { postId=post.Id}):null
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
                    post.Id = await _postManager.CreateAsync(new PostDto
                    {
                        PostTitle = post.PostTitle,
                        Content = post.Content,
                        Permerlink = post.Permerlink,
                        PostStatus = post.PostStatus,
                        CoverImageId = post.CoverImage != null ? (int?)post.CoverImage.Id : null
                    });
                }
                else
                {
                    //  PostDto updateModel=await _postManager.GetPostAsync(post.Id);

                    //updateModel.PostTitle = post.PostTitle;
                    //updateModel.Content = post.Content;
                    //updateModel.Permerlink = post.Permerlink;
                    //updateModel.PostStatus = post.PostStatus;
                    //updateModel.CoverImageId = post.CoverImage != null ? (int?)post.CoverImage.Id : null;


                    await _postManager.UpdateAsync((new AdminUpdatePostWrapper
                    {
                        PostId = post.Id,
                        PostTitle = post.PostTitle,
                        Content = post.Content,
                        Permerlink = post.Permerlink,
                        PostStatus = post.PostStatus,
                        CoverImageId = post.CoverImage != null ? (int?)post.CoverImage.Id : null,
                        UserId = 1
                    }));
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
        public async Task<IActionResult> UpdatePost(int id, [FromBody]PostDto post)
        {
            await _postManager.UpdateAsync(new AdminUpdatePostWrapper
            {
                PostId = post.Id,
                PostTitle = post.PostTitle,
                Content = post.Content,
                Permerlink = post.Permerlink,
                PostStatus = post.PostStatus,
                CoverImageId = post.CoverImage != null ? (int?)post.CoverImage.Id : null,
                UserId = 1
            });

            return CreatedAtAction("GetPost", new { id });
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult RemovePost(int id)
        {
            PostDto post = _postManager.Get(id);

            _postManager.Remove(id);

            var deleteObj = new
            {
                id,
                postStatus = "Deleted"

            };

            return Json(deleteObj);
        }


        [HttpGet("{postId}/cover")]
        public async Task<IActionResult> PostCoverImage(int postId)
        {
            var post = await _postManager.GetAsync(postId);

            if (post == null)
                return BadRequest("Invalid Post Id");

            if (post.CoverImage == null)
                return BadRequest($"No Cover Image for {post.PostTitle}");


            return Json(new
            {
                CoverImageId = post.CoverImage.Id,
                post.CoverImage.FileName
            });



        }


    }
}
