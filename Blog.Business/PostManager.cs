using Blog.Core.Business;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Blog.Data.Entity;
using Blog.Core.Repository;
using Blog.Repository.UnitOfWork;
using Blog.Core;
using Blog.Common.DTO;

namespace Blog.Business
{
    public class PostManager : IPostManager
    {
        private readonly UnitOfWork _unitOfWork;
        private readonly IMapper<Post, PostDto> _postMapper;

        public PostManager(UnitOfWork unitOfWork,IMapper<Post,PostDto> postMapper)
        {
            _unitOfWork = unitOfWork;
            _postMapper = postMapper;
        }
        public int CreateNewPost(PostDto post)
        {
            post.CreatedBy = 1;
            post.LastUpdatedBy = 1;
            post.CreatedDate = DateTime.Now;
            post.LastUpdatedDate = DateTime.Now;

            var entity = _postMapper.Map(post);

            _unitOfWork.PostRepository.Add(entity);
            _unitOfWork.SaveChanges();
          
            return entity.Id;
        }

        public Task<int> CreateNewPostAsync(PostDto post)
        {
            return Task.Run(() => {
               return CreateNewPost(post);
            });
        }

        public IEnumerable<PostDto> GetAll()
        {
            return  _postMapper.Map(_unitOfWork.PostRepository.GetAll());
        }

        public Task<IEnumerable<PostDto>> GetAllAsync()
        {
            return Task.Run(()=>{

                return GetAll();
            });
        }

        public PostDto GetPost(int id)
        {
          return _postMapper.Map(_unitOfWork.PostRepository.Get(id));
        }

        public Task<PostDto> GetPostAsync(int id)
        {
           return  Task.Run(() => {
                return GetPost(id);
            });
        }

        public int RemovePost(int postId)
        {
            _unitOfWork.PostRepository.Delete(postId);
           return _unitOfWork.SaveChanges();
        }

        public Task<int> RemovePostAsync(int postId)
        {
            return Task.Run(() =>
            {
                return RemovePost(postId);
            });
        }

        public int UpdatePost(PostDto post)
        {
            post.LastUpdatedDate = DateTime.Now;

            _unitOfWork.PostRepository.Update(_postMapper.Map(post));
            return _unitOfWork.SaveChanges();
        }

        public Task<int> UpdatePostAsync(PostDto post)
        {
            return Task.Run(() =>
            {
                return UpdatePost(post);

            });
        }


    }
}
