using Blog.Data.Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog.Data.DB
{
    public class BlogContext :DbContext
    {
        public BlogContext(DbContextOptions<BlogContext> options) :base(options)
        {
          
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
          //  optionsBuilder.UseSqlServer("Server=AHAMEDI\\AHAMEDI;Database=BlogApp_int;User Id=BLOG_USER;Password=pass#word1;MultipleActiveResultSets=true");
        }



        public DbSet<Post> Posts { get; set; }
        public DbSet<MediaFile> MediaFiles { get; set; }

        public DbSet<Lookup> Lookup { get; set; }
    }
}

