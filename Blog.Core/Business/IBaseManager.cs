using Blog.Common.DTO;
using Blog.Core.Repository;
using Blog.Data.Entity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Blog.Core.Business
{
    public interface IBaseManager
    {
    }

    public interface IBaseManager<TDto> : IBaseManager where TDto : BaseDto
    {
        TDto Get(params object[] keys);
        Task<TDto> GetAsync(params object[] keys);
        IEnumerable<TDto> GetAll();
        Task<IEnumerable<TDto>> GetAllAsync();

    }
}
