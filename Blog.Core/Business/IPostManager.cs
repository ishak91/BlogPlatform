using Blog.Common.DTO;
using Blog.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog.Core.Business
{
    public interface IPostManager
    {
        int CreateNewPost(PostDto entity);
        Task<int> CreateNewPostAsync(PostDto entity);
        IEnumerable<PostDto> GetAll();
        Task<IEnumerable<PostDto>> GetAllAsync();
        PostDto GetPost(int id);
        Task<PostDto> GetPostAsync(int id);

        int UpdatePost(PostDto PostDto);

        Task<int> UpdatePostAsync(PostDto PostDto);
        int RemovePost(int postId);
        Task<int> RemovePostAsync(int postId);

    }
}
