using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog.Data.Entity
{
    public class MediaFile
    {
        public int Id { get; set; }
        public string FileName { get; set; }
        public long Size { get; set; }
        public string Path { get; set; }
        public string FileType { get; set; }
        public string ContentType { get; set; }

        public DateTime CreatedDate { get; set; }
        public virtual ICollection<Post> Posts { get; set; }

    }
}
