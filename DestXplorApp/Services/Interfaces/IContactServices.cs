using System.Collections.Generic;
using System.Threading.Tasks;

namespace DestXplorWebApp.Services.Interfaces
{
  public interface IContactServices
  {
    Task<Contact> Get(int id);
    Task<IEnumerable<Contact>> GetAll(); 
    Task<Contact> Add(Contact contact); 
    Task<Contact> Update(Contact contact); 
    Task<Contact> Delete(Contact contact);
  }
}
