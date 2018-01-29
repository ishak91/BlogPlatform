using Blog.Core.Business;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Blog.Data.Entity;
using Blog.Core.Repository;
using Blog.Repository.UnitOfWork;

namespace Blog.Business
{
    public class LookupManager : ILookupManager
    {
        private readonly UnitOfWork _unitOfWork;

        public LookupManager(UnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public IEnumerable<Lookup> GetAll(string type)
        {
            return _unitOfWork.LookupRepository.Get(type);
        }
    }
}
