using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Blog.Common.ViewModel
{
    public class CategoryViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string UrlSlug { get; set; }

        public int? ParentCategoryId { get; set; }
    }

    public class NewCategoryViewModel
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string UrlSlug { get; set; }

        public int? ParentCategoryId { get; set; }
    }

    public class UpdateCategoryViewModel
    {
        public string Name { get; set; }
        public string UrlSlug { get; set; }

        public int? ParentCategoryId { get; set; }
    }
}
