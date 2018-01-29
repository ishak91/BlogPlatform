using Blog.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog.Core.Business
{
    public interface IMediaFileManager
    {
        void AddFile(MediaFile model);
        void AddFile(IEnumerable<MediaFile> model);
        void RemoveFile(MediaFile model);
        void RemoveFile(IEnumerable<MediaFile> model);
        MediaFile Find(int id);
        Task<MediaFile> FindAsync(int id);
        IEnumerable<MediaFile> Find(string fileName);
        Task<IEnumerable<MediaFile>> FindAsync(string fileName);
        IEnumerable<MediaFile> GetAll();
        Task<IEnumerable<MediaFile>> GetAllAsync();
        IEnumerable<MediaFile> FilterByFileType(string fileType);
        Task<IEnumerable<MediaFile>> FilterByFileTypeAsync(string fileType);
    }
}
