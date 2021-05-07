using Narnia.Models.Database;
using System;


namespace Narnia.Models.Response
{
    public class AnimalTypeResponse
    {
        private readonly AnimalType _animaltype;
       
        public AnimalTypeResponse(AnimalType animaltype)
        {
            _animaltype = animaltype;
        }

        public int Id => _animaltype.Id;
        public string TypeName => _animaltype.TypeName;
        public string Species => _animaltype.Species;
        public string Class => _animaltype.Class;
        public int Count => _animaltype.Animals.Count;
    }

}