using Blog.Core.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Blog.Data.Entity;
using Microsoft.Extensions.Logging;
using Blog.Data.DB;
using Microsoft.EntityFrameworkCore;

namespace Blog.Repository
{
    public class PostRepository :Repository, IPostRepository
    {
        private readonly ILogger<PostRepository> _logger;
        public PostRepository(ILogger<PostRepository> logger,BlogContext dbContext):base(dbContext)
        {
            _logger = logger;
          
        }
        public void CreateNewPost(Post entity)
        {
            _dbContext.Posts.Add(entity);
        }

        public IEnumerable<Post> GetAll()
        {
            return _dbContext.Posts.ToList();
        }

        public Post GetPost(int id)
        {
            return _dbContext.Posts.Include(p=>p.CoverImage).FirstOrDefault(post=>post.Id==id);
        }

        public void UpdatePost(Post post)
        {
            _dbContext.Entry(post).State = EntityState.Modified;
        }

        public void RemovePost(Post post)
        {
            _dbContext.Entry(post).State = EntityState.Deleted;
        }
    }
}
