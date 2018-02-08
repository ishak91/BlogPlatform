using System;
using System.Collections.Generic;
using System.Text;

namespace Blog.Common.ViewModel
{
    public class CategoryViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string UrlSlug { get; set; }

        public int PatentCategoryId { get; set; }
    }
}
