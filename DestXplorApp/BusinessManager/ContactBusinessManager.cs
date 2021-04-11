using DestXplorWebApp.BusinessManager.Interfaces;
using DestXplorWebApp.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DestXplorWebApp.BusinessManager
{
  public class ContactBusinessManager : IContactBusinessManager
  {
    private readonly IContactServices _contactService;

    public ContactBusinessManager(IContactServices contactServices)
    {
      _contactService = contactServices;
    }

    public async Task<Contact> GetContact(int id)
    {
      return await _contactService.Get(id);
    }

    public async Task<IEnumerable<Contact>> GetAllContacts()
    {
      return await _contactService.GetAll();
    }

    public async Task<Contact> AddContact(Contact contact)
    {
      return await _contactService.Add(contact);
    }

    public async Task<Contact> UpdateContact(Contact contact)
    {
      return await _contactService.Update(contact);
    }

    public async Task<Contact> DeleteContact(Contact contact)
    {
      return await _contactService.Delete(contact);
    }
  }
}
