using System;
using System.Collections.Generic;

namespace Blog.Common.DTO
{
    public class MediaFileDto :BaseDto
    {
        public int Id { get; set; }
        public string FileName { get; set; }
        public long Size { get; set; }
        public string Path { get; set; }
        public string FileType { get; set; }
        public string ContentType { get; set; }

        public IEnumerable<PostDto> Posts { get; set; }
    }
}