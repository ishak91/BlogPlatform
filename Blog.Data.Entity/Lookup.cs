using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog.Data.Entity
{
    public class Lookup
    {
        public int Id { get; set; }
        public string Type { get; set; }
        public string Text { get; set; }
        public string Value { get; set; }
    }
}
