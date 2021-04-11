using DestXplorWebApp;
using DestXplorWebApp.BusinessManager.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;


namespace DestXplorApp
{
  [Route("api/[controller]")]
  [ApiController]
  public class ContactController : ControllerBase
  {
    private readonly IContactBusinessManager _contactBusinessManager;

    public ContactController(IContactBusinessManager contactBusinessManager)
    {
      _contactBusinessManager = contactBusinessManager;
    }

    // GET: api/Contact
    [HttpGet]
    public async Task<IEnumerable<Contact>> GetAllContacts()
    {
      return await _contactBusinessManager.GetAllContacts();
    }

    // GET: api/Contact/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Contact>> GetContact(int id)
    {
      var contact = await _contactBusinessManager.GetContact(id);
      if (contact == null)
        return NotFound();

      return contact;
    }

    [HttpPost]
    public async Task<ActionResult<Contact>> PostContact(Contact contact)
    {
      var addedContact = await _contactBusinessManager.AddContact(contact);

      return CreatedAtAction("GetContact", new { id = contact.Id }, contact);
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<Contact>> DeleteContact(int id)
    {
      var contact = await _contactBusinessManager.GetContact(id);
      if (contact == null)
        return NotFound();

      var deletedContact = await _contactBusinessManager.DeleteContact(contact);

      return NoContent();
    }
  }
}
