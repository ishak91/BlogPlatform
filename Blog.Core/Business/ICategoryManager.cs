using Blog.Common.DTO;
using Blog.Common.Wrappers;
using Blog.Data.Entity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Blog.Core.Business
{
    public interface ICategoryManager : IBaseManager<CategoryDto>
    {
        int Create(CategoryDto dto);
        Task<int> CreateAsync(CategoryDto dto);
        int Update(AdminUpdateCategoryWrapper wrapper);
        Task<int> UpdateAsync(AdminUpdateCategoryWrapper wrapper);
        int Remove(int id);
        Task<int> RemoveAsync(int id);
    }
}
