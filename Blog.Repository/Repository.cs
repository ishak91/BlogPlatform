using Blog.Core.Repository;
using Blog.Data.DB;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog.Repository
{
    internal class Repository<Entity> : IRepository<Entity> where Entity:class
    {
        protected readonly BlogContext _dbContext;
        protected DbSet<Entity> EntitySet;

        public Repository(BlogContext dbContext)
        {
            _dbContext = dbContext;
         EntitySet=   _dbContext.Set<Entity>();
        }

        public virtual void Add(Entity entity)
        {
            EntitySet.Add(entity);
        }

        public virtual void Delete(int id)
        {

            EntitySet.Remove(EntitySet.Find(id));
        }

        public virtual Entity Get(int id)
        {
            return EntitySet.Find(id);
        }

        public IQueryable<Entity> ListAll()
        {
            return EntitySet.AsNoTracking();
        }

        public virtual void Update(Entity entity)
        {
            EntitySet.Update(entity);
        }
    }
}
