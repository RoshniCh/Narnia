using Narnia.Models.Database;
using System;
using System.Collections.Generic;


namespace Narnia.Models.Response
{
    public class AnimalTypeListResponse
    {
        public List<AnimalTypeResponse> AnimalTypeResponseList {get; set;} = new List<AnimalTypeResponse>();

        public AnimalTypeListResponse(List<AnimalType> list)
        {
            foreach (var item in list)
            {
                AnimalTypeResponse anTypeRes = new AnimalTypeResponse(item);
                AnimalTypeResponseList.Add(anTypeRes);
            }
        }
    }
}