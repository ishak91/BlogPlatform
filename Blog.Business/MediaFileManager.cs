using Blog.Core.Business;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Blog.Data.Entity;
using Blog.Core.Repository;
using Blog.Core;
using Blog.Repository.UnitOfWork;
using Blog.Common.DTO;

namespace Blog.Business
{
    public class MediaFileManager : IMediaFileManager
    {
       
        private readonly UnitOfWork _unitOfWork;
        private readonly IMapper<MediaFile, MediaFileDto> _mediaFileMapper;

        public MediaFileManager(UnitOfWork unitOfWork,IMapper<MediaFile,MediaFileDto> mediaFileMapper)
        {
            _unitOfWork = unitOfWork;
            _mediaFileMapper = mediaFileMapper;
        }
        public void AddFile(MediaFileDto model)
        {
            try
            {
                var entity = _mediaFileMapper.Map(model);
                _unitOfWork.MediaFileRepository.Add(entity);
                _unitOfWork.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void AddFile(IEnumerable<MediaFileDto> model)
        {
            try
            {
                MediaFile entity;
                foreach (var file in model)
                {
                   entity= _mediaFileMapper.Map(file);
                    _unitOfWork.MediaFileRepository.Add(entity);
                }

                 _unitOfWork.SaveChanges();



            }
            catch (Exception)
            {

                throw;
            }
        }

        public IEnumerable<MediaFileDto> FilterByFileType(string fileType)
        {
            try
            {
               return  _mediaFileMapper.Map(_unitOfWork.MediaFileRepository.FilterByFileType(fileType));
            }
            catch (Exception)
            {

                throw;
            }
        }

        public Task<IEnumerable<MediaFileDto>> FilterByFileTypeAsync(string fileType)
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

        public IEnumerable<MediaFileDto> Find(string fileName)
        {
            try
            {
               return _mediaFileMapper.Map(_unitOfWork.MediaFileRepository.Find(fileName));
            }
            catch (Exception)
            {

                throw;
            }
        }

        public MediaFileDto Find(int id)
        {
            return _mediaFileMapper.Map(_unitOfWork.MediaFileRepository.Get(id));
        }



        public Task<IEnumerable<MediaFileDto>> FindAsync(string fileName)
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

        public Task<MediaFileDto> FindAsync(int id)
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

        public IEnumerable<MediaFileDto> GetAll()
        {
            try
            {
                return _mediaFileMapper.Map(_unitOfWork.MediaFileRepository.GetAll());
            }
            catch (Exception)
            {

                throw;
            }
        }

        public Task<IEnumerable<MediaFileDto>> GetAllAsync()
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

        public void RemoveFile(IEnumerable<MediaFileDto> model)
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

        public void RemoveFile(int mediaFileId)
        {
            try
            {
                _unitOfWork.MediaFileRepository.Delete(mediaFileId);
                _unitOfWork.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
       
        }

        public void RemoveFile(IEnumerable<int> ids)
        {
            foreach (var id in ids)
            {
                _unitOfWork.MediaFileRepository.Delete(id);
            }
            
        }
    }
}
