using Microsoft.EntityFrameworkCore;

namespace DestXplorWebApp.Models
{
  public class ApplicationDbContext : DbContext
  {
    public ApplicationDbContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<Contact> Contacts { get; set; }
  }
}
