using Blog.Core.Business;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Blog.Data.Entity;
using Blog.Core.Repository;

namespace Blog.Business
{
    public class MediaManager : IMediaManager
    {
        private readonly IMediaFileRepository _fileRepository;
        public MediaManager(IMediaFileRepository fileRepository)
        {
            _fileRepository = fileRepository;
        }
        public void AddFile(MediaFile model)
        {
            try
            {
                _fileRepository.AddFile(model);
                _fileRepository.SaveChangesAsync();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void AddFile(IEnumerable<MediaFile> model)
        {
            try
            {
                foreach (var file in model)
                {

                    _fileRepository.AddFile(file);
                }

                 _fileRepository.SaveChanges();



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
               return _fileRepository.FilterByFileType(fileType);
            }
            catch (Exception)
            {

                throw;
            }
        }

        public Task<IEnumerable<MediaFile>> FilterByFileTypeAsync(string fileType)
        {
            try
            {
                return Task.Run(() => FilterByFileType(fileType));
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
               return _fileRepository.Find(fileName);
            }
            catch (Exception)
            {

                throw;
            }
        }

        public MediaFile Find(int id)
        {
            return _fileRepository.Find(id);
        }



        public Task<IEnumerable<MediaFile>> FindAsync(string fileName)
        {
            try
            {
               return Task.Run(() => Find(fileName));
            }
            catch (Exception)
            {

                throw;
            }
        }

        public Task<MediaFile> FindAsync(int id)
        {
            try
            {
                return Task.Run(() => Find(id));
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
                return _fileRepository.GetAll();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public Task<IEnumerable<MediaFile>> GetAllAsync()
        {
            try
            {
                return Task.Run(() => GetAll());
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void RemoveFile(IEnumerable<MediaFile> model)
        {
            try
            {
                foreach (var file in model)
                {
                    _fileRepository.RemoveFile(file);
                  
                }
                _fileRepository.SaveChanges();
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
                _fileRepository.RemoveFile(model);
                _fileRepository.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
       
        }
    }
}
