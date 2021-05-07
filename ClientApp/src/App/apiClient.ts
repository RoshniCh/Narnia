export interface NewAnimal {
    typeName : string;
    species : string;
    animalClass : string;
    animalName : string;
    sex : string;
    aquisitionDate : string;
    DOB : string;
}

export interface AnimalTypeResponse {
  id : number;
  typeName : string;
  species : string;
  class : string;
  count : number
}

export interface AnimalTypeListResponse {
  animalTypeResponseList: AnimalTypeResponse[];
}

export interface AnimalAllResponse{
  animalName : string;
  sex : string;
  aquisitionDate : string;
  dob : string;
  typeName : string;
  species : string;
  animalClass : string;
}

export interface AnimalAllListResponse {
  animalAllResponseList: AnimalAllResponse[];
  TotalNumberOfAnimals : number;
}



export async function AnimalSubmit(newAnimal: NewAnimal) {
    const response = await fetch(`/CreateAnimal`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAnimal),
    });
  
    if (!response.ok) {
      throw new Error(await response.json());
    }
  }

  export async function GetAnimalTypeList(): Promise<AnimalTypeListResponse> {
    const response = await fetch(`/AnimalTypeList/`);
    
    if (!response.ok) {
      throw new Error(await response.json());
    }
    return await response.json();
  }

  export async function AnimalSearch(animalName :string, species: string, animalClass : string, typeName :string, aquisitionDate : string,
    age: string, order: string): Promise<AnimalAllListResponse> {
    const response = await fetch(`/Search?animalName=${animalName}&species=${species}&animalClass=${animalClass}&typeName=${typeName}&aquisitionDate=${aquisitionDate}&age=${age}&order=${order}`);
    return await response.json();
  }
