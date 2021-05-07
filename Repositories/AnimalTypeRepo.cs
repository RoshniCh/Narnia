using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Narnia.Models.Database;
using Narnia.Models.Request;
// using Narnia.Models.Response;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System;
using Narnia;
using Narnia.Data;

namespace Narnia.Repositories {
    public interface IAnimalTypeRepo {
        AnimalType GetAnimalTypebyName(String TypeName);
        AnimalType CreateAnimalType(CreateAnimalTypeRequest animaltype);
        List<AnimalType> GetAnimalType();
    }

    public class AnimalTypeRepo : IAnimalTypeRepo {
        private readonly ApplicationDbContext _context;

        public AnimalTypeRepo(ApplicationDbContext context)
        {
            _context = context;
        }

        public AnimalType GetAnimalTypebyName(String TypeName) {
            return _context.AnimalType
                           .SingleOrDefault(animalType => animalType.TypeName == TypeName);
        }

        public AnimalType CreateAnimalType(CreateAnimalTypeRequest animaltype)
        {
            var insertResponse = _context.AnimalType.Add(new AnimalType
            {
                TypeName = animaltype.TypeName,
                Species = animaltype.Species,
                Class = animaltype.AnimalClass,

            });
            _context.SaveChanges();
            return insertResponse.Entity;
        }

        public List<AnimalType> GetAnimalType() {
            return _context.AnimalType
                            .Include(c => c.Animals)
                           .ToList();
        }
        
    }
}