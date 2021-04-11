using DestXplorWebApp.Models;
using DestXplorWebApp.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DestXplorWebApp.Services
{
  public class ContactServices : IContactServices
  {
    private readonly ApplicationDbContext _context;

    public ContactServices(ApplicationDbContext context)
    {
      _context = context;
    }

    public async Task<Contact> Get(int id)
    {
      return await _context.Contacts.FindAsync(id);
    }

    public async Task<IEnumerable<Contact>> GetAll()
    {
      return await _context.Contacts.ToListAsync();
    }

    public async Task<Contact> Add(Contact contact)
    {
      _context.Contacts.Add(contact);
      await _context.SaveChangesAsync();

      return contact;
    }

    public async Task<Contact> Update(Contact contact)
    {
      _context.Contacts.Update(contact);
      await _context.SaveChangesAsync();

      return contact;
    }

    public async Task<Contact> Delete(Contact contact)
    {
      _context.Contacts.Remove(contact);
      await _context.SaveChangesAsync();

      return contact;
    }
  }
}
