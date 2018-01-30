using Blog.Common.DTO;
using Blog.Core;
using Blog.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blog.Business.Mappers
{
    public class PostMapper : IMapper<Post, PostDto>
    {
        private readonly IMapper<MediaFile, MediaFileDto> _mediaFileMapper;
        public PostMapper(IMapper<MediaFile, MediaFileDto> mediaFileMapper)
        {
            _mediaFileMapper = mediaFileMapper;
        }

        public PostDto Map(Post source)
        {
            if (source == null)
                return null;

            return new PostDto {
                Id=source.Id,
                Content=source.Content,
                CoverImage=_mediaFileMapper.Map(source.CoverImage),
                CoverImageId=source.CoverImageId,
                CreatedBy=source.CreatedBy,
                CreatedDate=source.CreatedDate,
                LastUpdatedBy=source.LastUpdatedBy,
                LastUpdatedDate=source.LastUpdatedDate,
                Permerlink=source.Permerlink,
                PostStatus=source.PostStatus,
                PostTitle=source.PostTitle
            };
        }

        public IEnumerable<PostDto> Map(IEnumerable<Post> source)
        {
            if (source == null)
                return null;
            var mappedList = new List<PostDto>();

            foreach (var item in source)
            {
                mappedList.Add(Map(item));
            }

            return mappedList;
         
        }

        public Post Map(PostDto source)
        {
            if (source == null)
                return null;

            return new Post
            {
                Id = source.Id,
                Content = source.Content,
                CoverImage = _mediaFileMapper.Map(source.CoverImage),
                CoverImageId = source.CoverImageId,
                CreatedBy = source.CreatedBy,
                CreatedDate = source.CreatedDate,
                LastUpdatedBy = source.LastUpdatedBy,
                LastUpdatedDate = source.LastUpdatedDate,
                Permerlink = source.Permerlink,
                PostStatus = source.PostStatus,
                PostTitle = source.PostTitle
            };
        }

        public IEnumerable<Post> Map(IEnumerable<PostDto> source)
        {
            if (source == null)
                return null;

            var mappedList = new List<Post>();

            foreach (var item in source)
            {
                mappedList.Add(Map(item));
            }

            return mappedList;
        }
    }
}
