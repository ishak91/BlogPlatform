using Blog.Core.Business;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Blog.Data.Entity;
using Blog.Core.Repository;
using Blog.Core;
using Blog.Repository.UnitOfWork;

namespace Blog.Business
{
    public class MediaFileManager : IMediaFileManager
    {
       
        private readonly UnitOfWork _unitOfWork;

        public MediaFileManager(UnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public void AddFile(MediaFile model)
        {
            try
            {
                _unitOfWork.MediaFileRepository.Add(model);
                _unitOfWork.SaveChanges();
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

                    _unitOfWork.MediaFileRepository.Add(file);
                }

                 _unitOfWork.SaveChanges();



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
               return _unitOfWork.MediaFileRepository.FilterByFileType(fileType);
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
               return _unitOfWork.MediaFileRepository.Find(fileName);
            }
            catch (Exception)
            {

                throw;
            }
        }

        public MediaFile Find(int id)
        {
            return _unitOfWork.MediaFileRepository.Get(id);
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
                return _unitOfWork.MediaFileRepository.ListAll();
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
                    _unitOfWork.MediaFileRepository.Delete(file.Id);
                  
                }
                _unitOfWork.SaveChanges();
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
                _unitOfWork.MediaFileRepository.Delete(model.Id);
                _unitOfWork.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
       
        }
    }
}
