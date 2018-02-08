using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Blog.Common.DTO;
using Blog.Common.ViewModel;
using Blog.Core.Business;
using Blog.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Blog.Areas.Admin.Controllers
{
    [Produces("application/json")]
    [Route("api/admin/category")]
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
                var categoryDto = await _categoryManager.GetAllAsync();
                var categoryVm = categoryDto.Select(c => new CategoryViewModel
                {
                    Id = c.Id,
                    Name = c.Name,
                    UrlSlug = c.UrlSlug,
                    ParentCategoryId = c.ParentCategoryId
                });

                var response = new SuccessResponse<IEnumerable<CategoryViewModel>>(categoryVm);

                return Json(response);

            }
            catch (Exception ex)
            {
                var response = new ErrorResponse();
                response.Messages.Add(ex.Message);
                return BadRequest(response);
            }
        }

        [HttpGet, Route("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            
            try
            {
                var categoryDto = await _categoryManager.GetAsync(id);

               

                var response = new SuccessResponse<CategoryViewModel>(categoryDto != null ? new CategoryViewModel
                {
                    Id = categoryDto.Id,
                    Name = categoryDto.Name,
                    UrlSlug = categoryDto.UrlSlug,
                    ParentCategoryId = categoryDto.ParentCategoryId
                } : null);

                return Json(response);
            }
            catch (Exception ex)
            {

                var response = new ErrorResponse();
                response.Messages.Add(ex.Message);
                return BadRequest(response);
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddCategory([FromBody]NewCategoryViewModel viewModel)
        {
            try
            {
                var categoryDto = new CategoryDto
                {
                    Name = viewModel.Name,
                    UrlSlug = viewModel.UrlSlug,
                    ParentCategoryId = viewModel.ParentCategoryId
                };

                categoryDto.Id = await _categoryManager.CreateAsync(categoryDto);

               var  categoryVm = new CategoryViewModel {
                    Id=categoryDto.Id,
                    Name=categoryDto.Name,
                    ParentCategoryId=categoryDto.ParentCategoryId,
                    UrlSlug=categoryDto.UrlSlug
                };
                var response = new SuccessResponse<CategoryViewModel>(categoryVm);

                return Json(response);
            }
            catch (Exception ex)
            {
                var response = new ErrorResponse();
                response.Messages.Add(ex.Message);
                return BadRequest(response);
            }

        }

        [HttpPut, Route("{id}")]
        public async Task<IActionResult> UpdateCategory(int id, [FromBody]UpdateCategoryViewModel viewModel)
        {
            try
            {
                var rowCount = await _categoryManager.UpdateAsync(new Common.Wrappers.AdminUpdateCategoryWrapper
                {
                    CategoryId = id,
                    Name = viewModel.Name,
                    ParentCategoryId = viewModel.ParentCategoryId,
                    UrlSlug = viewModel.UrlSlug,
                    UserId = 1

                });

                var response = new SuccessResponse();

                return Json(response);
            }
            catch (Exception ex)
            {
                var response = new ErrorResponse();
                response.Messages.Add(ex.Message);
                return BadRequest(response);
            }
        }
    }
}