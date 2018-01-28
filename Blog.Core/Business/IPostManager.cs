using Blog.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog.Core.Business
{
    public interface IPostManager
    {
        int CreateNewPost(Post entity);
        Task<int> CreateNewPostAsync(Post entity);
        IEnumerable<Post> GetAll();
        Task<IEnumerable<Post>> GetAllAsync();
        Post GetPost(int id);
        Task<Post> GetPostAsync(int id);

        int UpdatePost(Post post);

        Task<int> UpdatePostAsync(Post post);
        int RemovePost(Post post);
        Task<int> RemovePostAsync(Post post);

    }
}
