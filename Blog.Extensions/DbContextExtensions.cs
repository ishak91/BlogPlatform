using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace Blog.Data.Extensions
{
    public static class DbContextExtensions
    {
        public static IServiceCollection AddBlogContext(this IServiceCollection service,string connectionString)
        {
            // Only add dependencies under Blog.Business namespace
            service.AddDbContextPool<DB.BlogContext>(option => {
                option.UseSqlServer(connectionString, sqlServerOption => {
                    sqlServerOption.MigrationsAssembly("Blog");
                });

            });

            return service;
        }
    }
}
