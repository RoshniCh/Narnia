using Narnia.Models.Database;
using System;
using System.Collections.Generic;


namespace Narnia.Models.Response
{
    public class AnimalAllListResponse
    {
        public List<AnimalAllResponse> AnimalAllResponseList {get; set;} = new List<AnimalAllResponse>();
        public int TotalNumberOfAnimals { get; set; }

        public AnimalAllListResponse(List<Animal> list)
        {
            TotalNumberOfAnimals = list.Count;
            foreach (var item in list)
            {
                AnimalAllResponse anRes = new AnimalAllResponse(item);
                AnimalAllResponseList.Add(anRes);
            }
        }
    }

}