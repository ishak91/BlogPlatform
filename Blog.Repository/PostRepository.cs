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
    internal class PostRepository :Repository<Post>, IPostRepository
    {

        public PostRepository(BlogContext dbContext) : base(dbContext)
        {
        }
        
    }
}
