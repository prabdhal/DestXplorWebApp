using System.Collections.Generic;
using System.Threading.Tasks;

namespace DestXplorWebApp.BusinessManager.Interfaces
{
  public interface IContactBusinessManager
  {
    Task<Contact> GetContact(int id);

    Task<IEnumerable<Contact>> GetAllContacts();

    Task<Contact> AddContact(Contact contact);

    Task<Contact> UpdateContact(Contact contact);

    Task<Contact> DeleteContact(Contact contact);
  }
}
