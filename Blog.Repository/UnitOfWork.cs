using Blog.Core;
using Blog.Core.Business;
using Blog.Core.Repository;
using Blog.Data.DB;
using Blog.Repository;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Blog.Repository.UnitOfWork
{
    public class UnitOfWork :IUnitOfWork
    {
        private readonly BlogContext _blogContext;


        private readonly IMediaFileRepository _mediaFileRepository;
        private readonly IPostRepository _postRepository;
        private readonly ILookupRepository _lookupRepository;

        public UnitOfWork(BlogContext blogContext)
        {
            _blogContext = blogContext;
        }


        public IMediaFileRepository MediaFileRepository
        {
            get
            {
                if (_mediaFileRepository == null)
                    return new MediaFileRepository(_blogContext);

                return _mediaFileRepository;
            }
        }

        public IPostRepository PostRepository
        {
            get
            {
                if (_postRepository == null)
                    return new PostRepository(_blogContext);

                return _postRepository;
            }
        }


        public ILookupRepository LookupRepository
        {
            get
            {
                if (_lookupRepository == null)
                    return new LookupRepository(_blogContext);

                return _lookupRepository;
            }
        }

        public int SaveChanges()
        {
            return _blogContext.SaveChanges();
        }

        public Task<int> SaveChangesAsync()
        {
            return _blogContext.SaveChangesAsync();
        }
    }
}
