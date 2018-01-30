using Blog.Common.DTO;
using Blog.Core;
using Blog.Data.Entity;
using System;
using System.Collections.Generic;
using System.Text;

namespace Blog.Business.Mappers
{
    public class MediaFileMapper : IMapper<MediaFile, MediaFileDto>
    {
        private readonly IMapper<Post, PostDto> _postMapper;

        public MediaFileMapper(IMapper<Post, PostDto> postMapper)
        {
            _postMapper = postMapper;
        }

        public MediaFile Map(MediaFileDto source)
        {
            if (source == null)
                return null;

            return new MediaFile {
                ContentType=source.ContentType,
                CreatedDate=source.CreatedDate,
                FileName=source.FileName,
                FileType=source.FileType,
                Id=source.Id,
                Path=source.Path,
                Posts=_postMapper.Map(source.Posts),
                Size=source.Size
            };
        }

        public MediaFileDto Map(MediaFile source)
        {

            if (source == null)
                return null;

            return new MediaFileDto
            {
                ContentType = source.ContentType,
                CreatedDate = source.CreatedDate,
                FileName = source.FileName,
                FileType = source.FileType,
                Id = source.Id,
                Path = source.Path,
                Posts = _postMapper.Map(source.Posts),
                Size = source.Size
            };
        }

        public IEnumerable<MediaFile> Map(IEnumerable<MediaFileDto> source)
        {
            if (source == null)
                return null;

            var mappedList = new List<MediaFile>();
            foreach (var item in source)
            {
                mappedList.Add(Map(item));
            }

            return mappedList;
        }

        public IEnumerable<MediaFileDto> Map(IEnumerable<MediaFile> source)
        {
            if (source == null)
                return null;

            var mappedList = new List<MediaFileDto>();
            foreach (var item in source)
            {
                mappedList.Add(Map(item));
            }

            return mappedList;
        }
    }
}
