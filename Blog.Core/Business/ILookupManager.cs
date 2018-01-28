using Blog.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog.Core.Business
{
    public interface ILookupManager
    {
        IEnumerable<Lookup> GetAll(string type);
    }
}
