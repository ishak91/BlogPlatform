using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog.Common.ViewModel
{
    public class PostViewModel
    {
        public int Id { get; set; }
        public string PostTitle { get; set; }
        public string Permerlink { get; set; }
        public string Content { get; set; }
        public PostStatus PostStatus { get; set; }

        public FileViewModel CoverImage { get; set; }


        public DateTime? CreatedDate { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? LastUpdatedDate { get; set; }
        public int? LastUpdatedBy { get; set; }


    }
}
