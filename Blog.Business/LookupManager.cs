using Blog.Core.Business;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Blog.Data.Entity;
using Blog.Core.Repository;

namespace Blog.Business
{
    public class LookupManager : ILookupManager
    {
        private readonly ILookupRepository _lookupRepository;
        public LookupManager(ILookupRepository lookupRepository)
        {
            _lookupRepository = lookupRepository;
        }
        public IEnumerable<Lookup> GetAll(string type)
        {
            return _lookupRepository.GetAll(type);
        }
    }
}
