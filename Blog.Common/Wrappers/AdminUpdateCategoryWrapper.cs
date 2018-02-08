using System;
using System.Collections.Generic;
using System.Text;

namespace Blog.Common.Wrappers
{
    public class AdminUpdateCategoryWrapper:BaseWrapper
    {
        public int CategoryId { get; set; }
        public string Name { get; set; }
        public string UrlSlug { get; set; }
        public int? ParentCategoryId { get; set; }

    }
}
