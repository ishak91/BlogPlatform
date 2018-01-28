using System.Threading.Tasks;

namespace Blog.Core.Repository
{
    public interface IRepository
    {
        int SaveChanges();
        Task<int> SaveChangesAsync();
    }
}