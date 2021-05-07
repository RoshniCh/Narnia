using System;

namespace Narnia.Models.Request
{
    public class AnimalSearchRequest 
    {
        // public int Page { get; set; } 
        // public int PageSize { get; set; } 
        public string AnimalName { get; set; }
        
        public string Species { get; set; }
        public string AnimalClass { get; set; }
        public string TypeName { get; set; }

        public DateTime? AquisitionDate { get; set; }

        public int? Age { get; set; }

        public string Order {get; set;}
        // public string EnclosureName {get;set;}

        // public int? Enclosure_Id {get;set;}
        }
    
}