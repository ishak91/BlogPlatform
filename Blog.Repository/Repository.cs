using Blog.Core.Repository;
using Blog.Data.DB;
using Blog.Data.Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog.Repository
{
    internal abstract class Repository<Entity> : IRepository<Entity> where Entity : BaseEntity
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

        public virtual void Delete(params object[] keys)
        {

            _entitySet.Remove(_entitySet.Find(keys));
        }

        public void Delete(Entity entity)
        {
            _entitySet.Remove(entity);
        }

        public virtual Entity Get(params object[] keys)
        {
            var entity=_entitySet.Find(keys);

            return entity;
        }

        public IQueryable<Entity> GetAll()
        {
            return _entitySet.AsNoTracking();
        }

        public virtual void Update(Entity entity)
        {
           
          //  _entitySet.Attach(entity);
            _entitySet.Update(entity);
        }
    }
}
