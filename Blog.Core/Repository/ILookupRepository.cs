using Blog.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog.Core.Repository
{
    public interface ILookupRepository :IRepository<Lookup>
    {
        IEnumerable<Lookup> Get(string type);
    }
}
