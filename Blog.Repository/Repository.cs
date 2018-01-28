using Blog.Core.Repository;
using Blog.Data.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog.Repository
{
    public class Repository : IRepository
    {
        protected readonly BlogContext _dbContext;

        public Repository(BlogContext dbContext)
        {
            _dbContext = dbContext;
        }
        public int SaveChanges()
        {
            return _dbContext.SaveChanges();
        }

        public Task<int> SaveChangesAsync()
        {
            return _dbContext.SaveChangesAsync();
        }
    }
}
