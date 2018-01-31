using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Blog.Core.Repository;
using Blog.Data.DB;
using Blog.Data.Entity;

namespace Blog.Repository
{
    internal class LookupRepository : Repository<Lookup>, ILookupRepository
    {
        private BlogContext _blogContext;

        public LookupRepository(BlogContext blogContext) :base (blogContext)
        {
            _blogContext = blogContext;
        }

        public IEnumerable<Lookup> Get(string type)
        {
            return _entitySet.Where(l => l.Type.Equals(type));
        }
    }
}
