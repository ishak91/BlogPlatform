using System;
using System.Collections.Generic;
using System.Text;

namespace Blog.Data.Entity
{

    public abstract class BaseEntity
    {
        public DateTime? CreatedDate { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? LastUpdatedDate { get; set; }
        public int? LastUpdatedBy { get; set; }
    }

    public abstract class BaseEntity<KeyType> : BaseEntity where KeyType :struct
    {
        public KeyType Id { get; set; }
    }
}
