using Blog.Core.Repository;
using Blog.Data.DB;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog.Repository
{
    internal class Repository<Entity> : IRepository<Entity> where Entity : class
    {
        protected readonly BlogContext _dbContext;
        protected readonly DbSet<Entity> _entitySet;

        public Repository(BlogContext dbContext)
        {
            _dbContext = dbContext;
            _entitySet = _dbContext.Set<Entity>();
        }

        public IQueryable<Entity> EntitySet
        {
            get
            {
                return _entitySet;
            }
        }

        public virtual void Add(Entity entity)
        {
            _entitySet.Add(entity);
        }

        public virtual void Delete(int id)
        {

            _entitySet.Remove(_entitySet.Find(id));
        }

        public virtual Entity Get(int id)
        {
            return _entitySet.Find(id);
        }

        public IQueryable<Entity> GetAll()
        {
            return _entitySet.AsNoTracking();
        }

        public virtual void Update(Entity entity)
        {
            _entitySet.Update(entity);
        }
    }
}
