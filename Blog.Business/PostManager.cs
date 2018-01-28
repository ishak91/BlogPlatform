using Blog.Core.Business;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Blog.Data.Entity;
using Blog.Core.Repository;

namespace Blog.Business
{
    public class PostManager : IPostManager
    {
        private readonly IPostRepository _postRepository;
        public PostManager(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }
        public int CreateNewPost(Post entity)
        {
            entity.CreatedBy = 1;
            entity.LastUpdatedBy = 1;
            entity.CreatedDate = DateTime.Now;
            entity.LastUpdatedDate = DateTime.Now;
            _postRepository.CreateNewPost(entity);
            _postRepository.SaveChanges();
            var id = entity.Id;
            return id;
        }

        public Task<int> CreateNewPostAsync(Post entity)
        {
            return Task.Run(() => {
               return CreateNewPost(entity);
            });
        }

        public IEnumerable<Post> GetAll()
        {
            return _postRepository.GetAll();
        }

        public Task<IEnumerable<Post>> GetAllAsync()
        {
            return Task.Run(()=>{

                return GetAll();
            });
        }

        public Post GetPost(int id)
        {
          return  _postRepository.GetPost(id);
        }

        public Task<Post> GetPostAsync(int id)
        {
           return  Task.Run(() => {
                return GetPost(id);
            });
        }

        public int RemovePost(Post post)
        {
             _postRepository.RemovePost(post);
           return _postRepository.SaveChanges();
        }

        public Task<int> RemovePostAsync(Post post)
        {
            return Task.Run(() =>
            {
                return RemovePost(post);
            });
        }

        public int UpdatePost(Post post)
        {
            post.LastUpdatedDate = DateTime.Now;
            _postRepository.UpdatePost(post);
            return _postRepository.SaveChanges();
        }

        public Task<int> UpdatePostAsync(Post post)
        {
            return Task.Run(() =>
            {
                return UpdatePost(post);

            });
        }


    }
}
