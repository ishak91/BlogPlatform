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
            //optionsBuilder.UseSqlServer("Data Source=10.3.240.32;Initial Catalog=ik_blog_test;Persist Security Info=True;User ID=ik;Password=pass#word1");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>().HasOne(c => c.ParentCategory);
            modelBuilder.Entity<Category>().Property(c => c.ParentCategoryId).IsRequired(false);
        }

        public DbSet<Post> Posts { get; set; }
        public DbSet<MediaFile> MediaFiles { get; set; }
        public DbSet<Category> Category { get; set; }

        public DbSet<Lookup> Lookup { get; set; }
    }
}

