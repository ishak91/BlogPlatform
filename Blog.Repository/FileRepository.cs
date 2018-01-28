using Blog.Core.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Blog.Data.Entity;
using Blog.Data.DB;

namespace Blog.Repository
{
    public class MediaFileRepository :Repository, IMediaFileRepository
    {
        

        public MediaFileRepository(BlogContext dbContext):base(dbContext)
        {
           
        }

        public void AddFile(MediaFile model)
        {
            try
            {
                _dbContext.MediaFiles.Add(model);
            }
            catch (Exception)
            {

                throw;
            }
        }

        public IEnumerable<MediaFile> FilterByFileType(string fileType)
        {
            try
            {
               return  _dbContext.MediaFiles.Where(f => f.FileType == fileType).ToList();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public IEnumerable<MediaFile> Find(string fileName)
        {
            try
            {
                return _dbContext.MediaFiles.Where(f => f.FileName == fileName).ToList();
            }
            catch (Exception ex)
            {

                throw;
            }
        }

        public MediaFile Find(int id)
        {
            try
            {
                return _dbContext.MediaFiles.SingleOrDefault(f => f.Id == id);
            }
            catch (Exception)
            {

                throw;
            }
        }

        public IEnumerable<MediaFile> GetAll()
        {
            try
            {
                return _dbContext.MediaFiles.ToList();
            }
            catch (Exception)
            {

                throw;
            } 
        }

        public void RemoveFile(MediaFile model)
        {
            try
            {
                _dbContext.Entry(model).State = Microsoft.EntityFrameworkCore.EntityState.Deleted;
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
