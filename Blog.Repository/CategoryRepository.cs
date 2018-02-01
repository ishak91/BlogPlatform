using Blog.Core.Repository;
using Blog.Data.DB;
using Blog.Data.Entity;
using System;
using System.Collections.Generic;
using System.Text;

namespace Blog.Repository
{
    internal class CategoryRepository : Repository<Category>, ICategoryRepository
    {
        public CategoryRepository(BlogContext dbContext) : base(dbContext)
        {
        }
    }
}
