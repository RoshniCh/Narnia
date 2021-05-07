using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Narnia.Models.Database;
using Narnia.Models.Request;
using Narnia.Data;
// using Narnia.Models.Response;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System;
using Narnia;

namespace Narnia.Repositories {
    public interface IAnimalRepo {
        Animal CreateAnimal(CreateAnimalRequest animalToAdd);
        public List<Animal> Search(AnimalSearchRequest search);
    }

    public class AnimalRepo : IAnimalRepo {
        private readonly ApplicationDbContext _context;

        public AnimalRepo(ApplicationDbContext context)
        {
            _context = context;
        }
        public Animal CreateAnimal(CreateAnimalRequest animal)
        {
             var insertResponse = _context.Animal.Add(new Animal
            {
                AnimalType_Id = animal.AnimalType_Id,
                AnimalName = animal.AnimalName,
                Sex = animal.Sex,
                AquisitionDate = animal.AquisitionDate,
                DOB = animal.DOB,
            });
            _context.SaveChanges();
            return insertResponse.Entity;
        }

        public List<Animal> Search(AnimalSearchRequest search)
        {

            var animal = _context.Animal
                .Include(c => c.AnimalType)
                // .Include(a => a.Enclosure)
                .AsQueryable();
            if (!String.IsNullOrEmpty(search.AnimalName)){
                animal = animal.Where(s => s.AnimalName.ToLower().Contains(search.AnimalName.ToLower()));
            }
            if (!String.IsNullOrEmpty(search.Species)){
                animal = animal.Where(s => s.AnimalType.Species.ToLower().Contains(search.Species.ToLower()));
            }
            if (!String.IsNullOrEmpty(search.AnimalClass)){
                animal = animal.Where(s => s.AnimalType.Class.ToLower().Contains(search.AnimalClass.ToLower()));
            }
            if (!String.IsNullOrEmpty(search.TypeName)){
                animal = animal.Where(s => s.AnimalType.TypeName.ToLower().Contains(search.TypeName.ToLower()));
            }
            if (search.AquisitionDate.HasValue){
                animal = animal.Where(s => s.AquisitionDate == search.AquisitionDate);
            }
            if (search.Age.HasValue){
                int num = -1 * search.Age ?? default(int);
                animal = animal.Where(s => s.DOB < (DateTime.Now.AddYears(num)));
            }
            if (search.Age.HasValue){
                int num = -1 * search.Age ?? default(int);
                animal = animal.Where(s => s.DOB > (DateTime.Now.AddYears(num-1)));
            }

            // if (!String.IsNullOrEmpty(search.EnclosureName)){
            //     animal = animal.Where(s => s.Enclosure.EnclosureName.ToLower().Contains(search.EnclosureName.ToLower()));
            // }

            // if(search.Enclosure_Id.HasValue){
            //     animal = animal.Where(s => s.Enclosure_Id == (search.Enclosure_Id));
            // }
            if (String.IsNullOrEmpty(search.Order))
            {
                search.Order = "";
            }
            switch(search.Order.ToLower())    
            {
            default:
                animal = animal.OrderBy(u => u.AnimalType.Species).AsQueryable();
                break;
            case "animalname":
                animal = animal.OrderBy(u => u.AnimalName.AsQueryable() );
                break;
            case "animalclass":
                animal = animal.OrderBy(u => u.AnimalType.Class.AsQueryable() );
                break;
            case "typename":
                animal = animal.OrderBy(u => u.AnimalType.TypeName.AsQueryable() );
                break;
            // case "enclosure":
            //     animal= animal.OrderBy(u=> u.Enclosure_Id).ThenBy(a => a.AnimalName.AsQueryable());
            //     break;
            }
            // var animalReturn = animal.Skip((search.Page - 1) * search.PageSize)
            // .Take(search.PageSize)
            // .ToList();

            var animalReturn = animal.ToList();
            return animalReturn;
        }

    }
}