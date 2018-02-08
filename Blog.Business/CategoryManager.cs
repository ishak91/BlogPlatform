using Blog.Common.DTO;
using Blog.Common.Wrappers;
using Blog.Core;
using Blog.Core.Business;
using Blog.Data.Entity;
using Blog.Repository.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Blog.Business
{
    public class CategoryManager : ICategoryManager
    {
        private readonly UnitOfWork _unitOfWork;
        private readonly IMapper<Category, CategoryDto> _categoryMapper;

        public CategoryManager(UnitOfWork unitOfWork,IMapper<Category,CategoryDto> categoryMapper)
        {
            _unitOfWork = unitOfWork;
            _categoryMapper = categoryMapper;
        }

        public int Create(CategoryDto dto)
        {
            try
            {
                var entity = _categoryMapper.Map(dto);
                _unitOfWork.CategoryRepository.Add(entity);
                _unitOfWork.SaveChanges();

                return entity.Id;
            }
            catch (Exception ex)
            {

                throw;
            }
        }

        public Task<int> CreateAsync(CategoryDto dto)
        {
            return Task.Run(() => Create(dto));
        }

        public CategoryDto Get(params object[] keys)
        {
            try
            {
               var  entity =_unitOfWork.CategoryRepository.Get(keys);
                if (entity == null)
                    return null;

                return _categoryMapper.Map(entity);
            }
            catch (Exception)
            {

                throw;
            }
        }

        public IEnumerable<CategoryDto> GetAll()
        {
            try
            {
                return _categoryMapper.Map(_unitOfWork.CategoryRepository.GetAll());
            }
            catch (Exception)
            {

                throw;
            }
           
        }

        public Task<IEnumerable<CategoryDto>> GetAllAsync()
        {
            return Task.Run(() => GetAll());
        }

        public Task<CategoryDto> GetAsync(params object[] keys)
        {
            return Task.Run(() => Get(keys));
        }

        public int Remove(int id)
        {
            var entity = _unitOfWork.CategoryRepository.Get(id);
            if (entity == null)
                throw new ApplicationException($"Category Id {id} not found");

            _unitOfWork.CategoryRepository.Delete(entity);
           return _unitOfWork.SaveChanges();
        }

        public Task<int> RemoveAsync(int id)
        {
            return Task.Run(() => Remove(id));
        }

        public int Update(AdminUpdateCategoryWrapper wrapper)
        {
            try
            {
                var entity=_unitOfWork.CategoryRepository.Get(wrapper.CategoryId);

                if (entity == null)
                    throw  new ApplicationException($"Category Id {wrapper.CategoryId} not found");

                entity.LastUpdatedBy = wrapper.UserId;
                entity.LastUpdatedDate = DateTime.Now;

                entity.Name = wrapper.Name;
                entity.UrlSlug = wrapper.UrlSlug;
                entity.ParentCategoryId = wrapper.ParentCategoryId;

                _unitOfWork.CategoryRepository.Update(entity);
              return   _unitOfWork.SaveChanges();

            }
            catch (Exception)
            {

                throw;
            }
        }

        public Task<int> UpdateAsync(AdminUpdateCategoryWrapper wrapper)
        {
            return Task.Run(() => Update(wrapper));
        }
    }
}
