using System;
using System.Collections.Generic;
using System.Text;

namespace Blog.Common.DTO
{
    public abstract class BaseDto
    {
        public DateTime? CreatedDate { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? LastUpdatedDate { get; set; }
        public int? LastUpdatedBy { get; set; }
    }

    public abstract class BaseDto<Tkey> : BaseDto where Tkey : struct
    {
        public Tkey Id { get; set; }
    }
}
