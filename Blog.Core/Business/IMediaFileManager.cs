using Blog.Common.DTO;
using Blog.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog.Core.Business
{
    public interface IMediaFileManager
    {
        int AddFile(MediaFileDto model);
        IEnumerable<MediaFileDto> AddFile(List<MediaFileDto> model);
        Task<int> AddFileAsync(MediaFileDto model);
        Task<IEnumerable<MediaFileDto>> AddFileAsync(List<MediaFileDto> model);
        void RemoveFile(int mediaFileId);
        void RemoveFile(IEnumerable<MediaFileDto> model);
        void RemoveFile(IEnumerable<int> ids);

        Task RemoveFileAsync(int mediaFileId);
        Task RemoveFileAsync(IEnumerable<MediaFileDto> model);
        Task RemoveFileAsync(IEnumerable<int> ids);

        MediaFileDto Find(int id);
        Task<MediaFileDto> FindAsync(int id);
        IEnumerable<MediaFileDto> Find(string fileName);
        Task<IEnumerable<MediaFileDto>> FindAsync(string fileName);
        IEnumerable<MediaFileDto> GetAll();
        Task<IEnumerable<MediaFileDto>> GetAllAsync();
        IEnumerable<MediaFileDto> FilterByFileType(string fileType);
        Task<IEnumerable<MediaFileDto>> FilterByFileTypeAsync(string fileType);
     
    }
}
