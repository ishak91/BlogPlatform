using Blog.Common.DTO;
using Blog.Common.Wrappers;
using Blog.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog.Core.Business
{
    public interface IPostManager : IBaseManager<PostDto>
    {

        int Create(PostDto dto);
        Task<int> CreateAsync(PostDto dto);
        int Update(AdminUpdatePostWrapper wrapper);
        Task<int> UpdateAsync(AdminUpdatePostWrapper wrapper);
        int Remove(int id);
        Task<int> RemoveAsync(int id);
    }
}
