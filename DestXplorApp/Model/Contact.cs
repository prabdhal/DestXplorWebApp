using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DestXplorApp
{
  public class Contact
  {
    public int Id { get; set; }

    [Required]
    [Column(TypeName = "varchar(50)")]
    public string Name { get; set; }

    [Required]
    [Column(TypeName = "varchar(50)")]
    public string Subject { get; set; }

    [Required]
    public string Message { get; set; }
  }
}
