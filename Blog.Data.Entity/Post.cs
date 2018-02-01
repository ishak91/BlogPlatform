
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Blog.Data.Entity
{
    public class Post : BaseEntity<int>
    {

        public string PostTitle { get; set; }
        public string Permerlink { get; set; }
        public string Content { get; set; }

        [JsonConverter(typeof(StringEnumConverter))]
        public PostStatus PostStatus { get; set; }

        public int? CoverImageId { get; set; }

        public virtual MediaFile CoverImage { get; set; }


    }
}
