using Blog.Core.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Blog.Data.Entity;
using Blog.Data.DB;

namespace Blog.Repository
{
    internal class MediaFileRepository : Repository<MediaFile>, IMediaFileRepository
    {


        public MediaFileRepository(BlogContext dbContext) : base(dbContext)
        {

        }



        public IEnumerable<MediaFile> FilterByFileType(string fileType)
        {

            return _dbContext.MediaFiles.Where(f => f.FileType == fileType).ToList();

        }

        public IEnumerable<MediaFile> Find(string fileName)
        {

            return _entitySet.Where(f => f.FileName == fileName);

        }






    }
}
