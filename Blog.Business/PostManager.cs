using Blog.Core.Business;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Blog.Data.Entity;
using Blog.Core.Repository;
using Blog.Repository.UnitOfWork;

namespace Blog.Business
{
    public class PostManager : IPostManager
    {
        private readonly UnitOfWork _unitOfWork;
        public PostManager(UnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public int CreateNewPost(Post entity)
        {
            entity.CreatedBy = 1;
            entity.LastUpdatedBy = 1;
            entity.CreatedDate = DateTime.Now;
            entity.LastUpdatedDate = DateTime.Now;
            _unitOfWork.PostRepository.Add(entity);
            _unitOfWork.SaveChanges();
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
            return _unitOfWork.PostRepository.ListAll();
        }

        public Task<IEnumerable<Post>> GetAllAsync()
        {
            return Task.Run(()=>{

                return GetAll();
            });
        }

        public Post GetPost(int id)
        {
          return _unitOfWork.PostRepository.Get(id);
        }

        public Task<Post> GetPostAsync(int id)
        {
           return  Task.Run(() => {
                return GetPost(id);
            });
        }

        public int RemovePost(Post post)
        {
            _unitOfWork.PostRepository.Delete(post.Id);
           return _unitOfWork.SaveChanges();
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
            _unitOfWork.PostRepository.Update(post);
            return _unitOfWork.SaveChanges();
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
