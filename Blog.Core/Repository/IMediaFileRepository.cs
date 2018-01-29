using Blog.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog.Core.Repository
{
    public interface IMediaFileRepository :IRepository<MediaFile>
    {
       // void AddFile(MediaFile model);
       // void RemoveFile(MediaFile model);
      //  MediaFile Find(int id);
        IEnumerable<MediaFile> Find(string fileName);

      //  IEnumerable<MediaFile> GetAll();

        IEnumerable<MediaFile> FilterByFileType(string fileType);


    }
}
