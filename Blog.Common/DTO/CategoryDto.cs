using System;
using System.Collections.Generic;
using System.Text;

namespace Blog.Common.DTO
{
    public class CategoryDto:BaseDto<int>
    {
        public string Name { get; set; }
        public string UrlSlug { get; set; }

        public int PatentCategoryId { get; set; }
        public CategoryDto ParentCategory { get; set; }
    }
}
