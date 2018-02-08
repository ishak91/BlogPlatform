using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Blog.Common.ViewModel;
using Blog.Core.Business;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Blog.Areas.Admin.Controllers
{
    [Produces("application/json")]
    [Route("api/category")]
    public class CategoryApiController : Controller
    {
        private readonly ICategoryManager _categoryManager;

        public CategoryApiController(ICategoryManager categoryManager)
        {
            _categoryManager = categoryManager;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var categoryDto=await _categoryManager.GetAllAsync();
                var categoryVm = categoryDto.Select(c => new CategoryViewModel
                {
                    Id = c.Id,
                    Name=c.Name,
                    UrlSlug=c.UrlSlug,
                    PatentCategoryId=c.PatentCategoryId
                });

                return Json(categoryVm);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}