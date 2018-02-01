using Blog.Business;
using Blog.Common.DTO;
using Blog.Core;
using Blog.Core.Business;
using Blog.Data.Entity;
using Blog.Repository.UnitOfWork;
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

            service.AddTransient<IPostManager, PostManager>();
            service.AddTransient<IMediaFileManager,MediaFileManager>();
         //   service.AddTransient<ILookupManager, LookupManager>();


            //Mappers
            service.AddTransient<IMapper<Post, PostDto>,Business.Mappers.PostMapper>();
            service.AddTransient<IMapper<MediaFile, MediaFileDto>, Business.Mappers.MediaFileMapper>();
          

            return service;
        }



        public static IServiceCollection AddRepositoryDependencies(this IServiceCollection service)
        {
            // Only add dependencies under Blog.Reporotiry namespace

            service.AddTransient<UnitOfWork>();
            return service;
        }

        public static IServiceCollection AddCommonDependencies(this IServiceCollection service)
        {
            // Add dependencies  not fall under Blog.Reporotiry && Blog.Business namespace
            return service;
        }


        

    }
}
