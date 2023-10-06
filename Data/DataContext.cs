using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SwiftDelivery.Entities;
using Job = SwiftDelivery.Entities.Job;

namespace SwiftDelivery.Data
{
    public class DataContext : IdentityDbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Job> Jobs { get; set; }
    }
}
