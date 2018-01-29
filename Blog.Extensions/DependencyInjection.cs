using Blog.Business;
using Blog.Core.Business;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace Blog.Extensions.DependencyInjection
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddBusinessDependencies(this IServiceCollection service)
        {
            // Only add dependencies under Blog.Business namespace
       

            return service;
        }

        public static IServiceCollection AddRepositoryDependencies(this IServiceCollection service)
        {
            // Only add dependencies under Blog.Reporotiry namespace
            return service;
        }

        public static IServiceCollection AddCommonDependencies(this IServiceCollection service)
        {
            // Add dependencies  not fall under Blog.Reporotiry && Blog.Business namespace
            return service;
        }
    }
}
