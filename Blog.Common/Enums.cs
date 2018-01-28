using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog
{
   public enum PostStatus {
        Draft=1,
        Publish,
        Private,
        Disabled
    }

    public enum LookupType
    {
        Privilage=1
    }
}
