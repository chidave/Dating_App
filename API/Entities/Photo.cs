using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("Photos")]  //ensures that the table 'photos' is created in Db despite not being in the DBContext
    public class Photo
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public bool IsMain { get; set; }
        public string PublicId { get; set; }

        // the next two lines "fully define" the relationship b/w the appuser table and photos table
        public AppUser AppUser { get; set; }
        public int AppUserId { get; set; }
    }
}