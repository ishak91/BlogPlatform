using Blog.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog.Core.Repository
{
    public interface IPostRepository :IRepository
    {
        void CreateNewPost(Post entity);
     
        IEnumerable<Post> GetAll();
        Post GetPost(int id);

        void UpdatePost(Post post);

        void RemovePost(Post post);

     
    }
}
