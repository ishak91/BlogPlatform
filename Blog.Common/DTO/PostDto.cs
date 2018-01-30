using System;
using System.Collections.Generic;
using System.Text;

namespace Blog.Common.DTO
{
    public class PostDto
    {
        public int Id { get; set; }
        public string PostTitle { get; set; }
        public string Permerlink { get; set; }
        public string Content { get; set; }

        public PostStatus PostStatus { get; set; }

        public int? CoverImageId { get; set; }


        public DateTime? CreatedDate { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? LastUpdatedDate { get; set; }
        public int? LastUpdatedBy { get; set; }

        public MediaFileDto CoverImage { get; set; }

    }
}
