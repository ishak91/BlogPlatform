using System.Linq;
using System.Threading.Tasks;

namespace Blog.Core.Repository
{
    public interface IRepository
    { }

    public interface IRepository<Entity> :IRepository where Entity : class
    {
        IQueryable<Entity> EntitySet { get;}
        Entity Get(params object[] keys);
        void Add(Entity entity);
        void Update(Entity entity);
        void Delete(params object[] keys);
        void Delete(Entity entity);
        IQueryable<Entity> GetAll();
    }
}