using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog.Common.ViewModel
{
    public class FileViewModel
    {
        public int Id { get; set; }
        public string FileName { get; set; }
        public long Size { get; set; }
        public string Path { get; set; }

        public string FileType { get; set; }
    }
}
