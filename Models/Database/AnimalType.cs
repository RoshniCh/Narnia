using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Narnia.Models.Database {
    public class AnimalType {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string TypeName { get; set; }
        public string Species { get; set; }
        public string Class { get; set; }

        public ICollection<Animal> Animals { get; set; }

    }
}