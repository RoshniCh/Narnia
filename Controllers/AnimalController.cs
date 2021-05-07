using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Narnia.Models;
using Narnia.Models.Database;
using Narnia.Models.Request;
using Narnia.Models.Response;
using Narnia.Data;
using Narnia;
using Narnia.Repositories;

namespace Narnia.Controllers {
    public class AnimalController : ControllerBase
    {
        private readonly IAnimalRepo _animals;
        private readonly IAnimalTypeRepo _animaltypes;
        public AnimalController(IAnimalRepo animals, IAnimalTypeRepo animaltypes)
        {
            _animals = animals;
            _animaltypes = animaltypes;
        }
        
        [HttpPost("CreateAnimal")]
        public IActionResult AddAnimal ([FromBody] CreateAnimalUserRequest newAnimal)
        {
            var animalTypeSelect = _animaltypes.GetAnimalTypebyName(newAnimal.TypeName);
            Animal animalAdded;
            if (animalTypeSelect != null)
            {
                CreateAnimalRequest animalToAdd = new CreateAnimalRequest();
                animalToAdd.AnimalType_Id = animalTypeSelect.Id;
                animalToAdd.AnimalName = newAnimal.AnimalName;
                animalToAdd.Sex = newAnimal.Sex;
                animalToAdd.AquisitionDate = newAnimal.AquisitionDate;
                animalToAdd.DOB = newAnimal.DOB;
                animalAdded = _animals.CreateAnimal(animalToAdd);
            }
            else {
                CreateAnimalTypeRequest animalTypeToAdd = new CreateAnimalTypeRequest();
                animalTypeToAdd.TypeName = newAnimal.TypeName;
                animalTypeToAdd.Species = newAnimal.Species;
                animalTypeToAdd.AnimalClass = newAnimal.AnimalClass;
                var animalTypeAdded = _animaltypes.CreateAnimalType(animalTypeToAdd);

                CreateAnimalRequest animalToAdd = new CreateAnimalRequest();
                animalToAdd.AnimalType_Id = animalTypeAdded.Id;
                animalToAdd.AnimalName = newAnimal.AnimalName;
                animalToAdd.Sex = newAnimal.Sex;
                animalToAdd.AquisitionDate = newAnimal.AquisitionDate;
                animalToAdd.DOB = newAnimal.DOB;
                animalAdded = _animals.CreateAnimal(animalToAdd);

            }
            if (animalAdded == null)
                {
                    return StatusCode(401);
                }
            else
                {
                    return StatusCode(200);
                }
            
        }

        [HttpGet("AnimalTypeList")]
        public ActionResult<AnimalTypeListResponse> GetAnimalTypeList()
        {
            var animaltypes = _animaltypes.GetAnimalType();
            AnimalTypeListResponse animalTypeResult = new AnimalTypeListResponse(animaltypes);
            return animalTypeResult;
        }

        [HttpGet("Search")]
        public ActionResult<AnimalAllListResponse> Search([FromQuery] AnimalSearchRequest searchRequest)
        {
            var animals = _animals.Search(searchRequest);
            AnimalAllListResponse animalSearchResult = new AnimalAllListResponse(animals);
            // Console.WriteLine("**********************");
            // Console.WriteLine(animalSearchResult.TotalNumberOfAnimals);
            // Console.WriteLine("**********************");
            return animalSearchResult;
        }

        
    }
}