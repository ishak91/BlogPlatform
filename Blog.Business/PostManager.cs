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
        private readonly IMapper<MediaFile, MediaFileDto> _mediaMapper;

        public PostManager(UnitOfWork unitOfWork,IMapper<Post,PostDto> postMapper)
        {
            _unitOfWork = unitOfWork;
            _postMapper = postMapper;
        }
        public int CreateNewPost(PostDto entity)
        {
            entity.CreatedBy = 1;
            entity.LastUpdatedBy = 1;
            entity.CreatedDate = DateTime.Now;
            entity.LastUpdatedDate = DateTime.Now;


            _unitOfWork.PostRepository.Add(_postMapper.Map(entity));
            _unitOfWork.SaveChanges();
            var id = entity.Id;
            return id;
        }

        public Task<int> CreateNewPostAsync(PostDto entity)
        {
            return Task.Run(() => {
               return CreateNewPost(entity);
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

        public Task<IEnumerable<MediaFileDto>> GetMediaAsync(int postId)
        {
            throw new NotImplementedException();
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
