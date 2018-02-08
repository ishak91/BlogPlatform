using Blog.Common.DTO;
using Blog.Core;
using Blog.Data.Entity;
using System;
using System.Collections.Generic;
using System.Text;

namespace Blog.Business.Mappers
{
    public class CategoryMapper : IMapper<Category, CategoryDto>
    {
        public Category Map(CategoryDto source)
        {

            if (source == null)
                return null;

            return new Category {
                Id = source.Id,
                Name = source.Name,
                ParentCategoryId = source.ParentCategoryId,
                UrlSlug=source.UrlSlug,
                CreatedBy=source.CreatedBy,
                CreatedDate=source.CreatedDate,
                LastUpdatedBy=source.LastUpdatedBy,
                LastUpdatedDate=source.LastUpdatedDate,
                ParentCategory=Map(source.ParentCategory)                
            };
        }

        public CategoryDto Map(Category source)
        {
            if (source == null)
                return null;

            return new CategoryDto
            {
                Id = source.Id,
                Name = source.Name,
                ParentCategoryId = source.ParentCategoryId,
                UrlSlug = source.UrlSlug,
                CreatedBy = source.CreatedBy,
                CreatedDate = source.CreatedDate,
                LastUpdatedBy = source.LastUpdatedBy,
                LastUpdatedDate = source.LastUpdatedDate,
                ParentCategory = Map(source.ParentCategory)
            };
        }

        public IEnumerable<Category> Map(IEnumerable<CategoryDto> source)
        {
            if (source == null)
                return null;

            var mappedList = new List<Category>();

            foreach (var item in source)
            {
                mappedList.Add(Map(item));
            }

            return mappedList;
        }

        public IEnumerable<CategoryDto> Map(IEnumerable<Category> source)
        {
            if (source == null)
                return null;

            var mappedList = new List<CategoryDto>();

            foreach (var item in source)
            {
                mappedList.Add(Map(item));
            }

            return mappedList;
        }
    }
}
