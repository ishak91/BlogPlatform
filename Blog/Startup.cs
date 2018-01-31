using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Blog.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Blog.Data.Extensions;
using Microsoft.AspNetCore.Mvc.ApplicationModels;

namespace Blog
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc(option=> {
                option.Conventions.Add(new ApiExplorerGetsOnlyConvention());
            });

            services.AddBlogContext(Configuration.GetConnectionString("Connection"));

            services.AddSwaggerGen(option => {
                option.SwaggerDoc("v1", new Swashbuckle.AspNetCore.Swagger.Info {
                    Title="Blog Platform API",
                    Version="v1"

                });
            });

            //Dependency Injection
            services.AddBusinessDependencies();
            services.AddRepositoryDependencies();
            services.AddCommonDependencies();
            
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseBrowserLink();
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();
            app.UseSwagger();
            app.UseSwaggerUI(option => {
                option.SwaggerEndpoint("/swagger/v1/swagger.json", "Blog Platform API");
            });

            app.UseMvc(routes =>
            {

              
                routes.MapRoute(
                   name: "default",
                   template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapRoute(
                 name: "default-area",
                 template: "admin/{controller}/{action}/{id?}",
                 defaults: new { Area = "Admin", controller = "Home", action = "Index" });


                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { Area = "Admin", controller = "Home", action = "Index" });



            });
        }
    }


    public class ApiExplorerGetsOnlyConvention : IActionModelConvention
    {
        public void Apply(ActionModel action)
        {
            action.ApiExplorer.IsVisible = action.Controller.ControllerName.ToLower().Contains("api");
        }
    }
}
