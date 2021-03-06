using Narnia.Models.Database;
using System;


namespace Narnia.Models.Response
{
    public class AnimalAllResponse
    {
        private readonly Animal _animal;
       
        public AnimalAllResponse(Animal animal)
        {
            _animal = animal;
        }

        public string AnimalName => _animal.AnimalName;
        public string Sex => _animal.Sex;
        public DateTime AquisitionDate => _animal.AquisitionDate;
        public DateTime DOB => _animal.DOB;

        public string TypeName => _animal.AnimalType.TypeName;
        public string Species => _animal.AnimalType.Species;
        public string AnimalClass => _animal.AnimalType.Class;
    }

}