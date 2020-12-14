using API.Entities;
using Microsoft.EntityFrameworkCore;            //an import statement

namespace API.Data
{
    //DataContext inherits from DbContext
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<AppUser> Users { get; set; }

    }
}