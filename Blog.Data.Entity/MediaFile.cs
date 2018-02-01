using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog.Data.Entity
{
    public class MediaFile : BaseEntity<int>
    {
      
        public string FileName { get; set; }
        public long Size { get; set; }
        public string Path { get; set; }
        public string FileType { get; set; }
        public string ContentType { get; set; }

     
        public virtual IEnumerable<Post> Posts { get; set; }

    }   
}
