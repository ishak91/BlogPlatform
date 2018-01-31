using System.Linq;
using System.Threading.Tasks;

namespace Blog.Core.Repository
{
    public interface IRepository<Entity> where Entity : class
    {
        IQueryable<Entity> EntitySet { get;}
        Entity Get(int id);
        void Add(Entity entity);
        void Update(Entity entity);
        void Delete(int id);
       IQueryable<Entity> GetAll();
    }
}