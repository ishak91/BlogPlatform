using System;
using System.Collections.Generic;
using System.Text;

namespace Blog.Data.Entity
{
    public class Category : BaseEntity<int>
    {
      
        public string Name { get; set; }
        public string UrlSlug { get; set; }

        public int? ParentCategoryId { get; set; }
        public Category ParentCategory { get; set; }
    }
}
