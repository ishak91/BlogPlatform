using System;
using System.Collections.Generic;
using System.Text;

namespace Blog.Common.Wrappers
{
    public class AdminUpdatePostWrapper :BaseWrapper
    {
        public int PostId { get; set; }
        public string PostTitle { get; set; }
        public string Permerlink { get; set; }
        public string Content { get; set; }
        public PostStatus PostStatus { get; set; }
        public int? CoverImageId { get; set; }

    }
}
