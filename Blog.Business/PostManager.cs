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
using Blog.Common.Wrappers;

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
        public int Create(PostDto post)
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

        public Task<int> CreateAsync(PostDto post)
        {
            return Task.Run(() => {
               return Create(post);
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

        public PostDto Get(params object[] keys)
        {
          return _postMapper.Map(_unitOfWork.PostRepository.Get(keys));
        }

        public Task<PostDto> GetAsync(params object[] keys)
        {
           return  Task.Run(() => {
                return Get(keys);
            });
        }

        public int Remove(int id)
        {
            _unitOfWork.PostRepository.Delete(id);
           return _unitOfWork.SaveChanges();
        }

        public Task<int> RemoveAsync(int id)
        {
            return Task.Run(() =>
            {
                return Remove(id);
            });
        }

        public int Update(AdminUpdatePostWrapper wrapper)
        {
            var entity = _unitOfWork.PostRepository.Get(wrapper.PostId);
       
            entity.PostTitle = wrapper.PostTitle;
            entity.Permerlink = wrapper.Permerlink;
            entity.PostStatus = wrapper.PostStatus;
            entity.Content = wrapper.Content;
            entity.CoverImageId = wrapper.CoverImageId;
            entity.LastUpdatedDate = DateTime.Now;
            entity.LastUpdatedBy = wrapper.UserId;

            _unitOfWork.PostRepository.Update(entity);
            return _unitOfWork.SaveChanges();
        }

        public Task<int> UpdateAsync(AdminUpdatePostWrapper wrapper)
        {
            return Task.Run(() =>
            {
                return Update(wrapper);

            });
        }
        
    }
}
