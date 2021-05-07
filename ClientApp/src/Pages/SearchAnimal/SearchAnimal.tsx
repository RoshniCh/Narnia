import React, { FormEvent, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './SearchAnimal.scss';
import { AnimalAllListResponse, AnimalAllResponse, AnimalSearch } from '../../App/apiClient';

export function SearchAnimalTable(data: AnimalAllResponse): JSX.Element {
    return (
        <tr>
            <td>{data.animalName}</td>
            <td>{data.sex}</td>
            <td>{data.aquisitionDate}</td>
            <td>{data.dob}</td>
            <td>{data.typeName}</td>
            <td>{data.species}</td>
            <td>{data.animalClass}</td>
        </tr>

    );
}

export function SearchAnimal () : JSX.Element {
    type FormStatus = "READY" | "SUBMITTING" | "ERROR" | "FINISHED";
    type PageStatus = "INITIAL" | "RESULTS";

    const [animalName, setAnimalName] = useState("");
    const [species, setSpecies] = useState("");
    const [animalClass, setAnimalClass] = useState("");
    const [typeName, setTypeName] = useState("");
    const [aquisitionDate, setAquisitionDate] = useState("");
    const [age, setAge] = useState("");
    const [order, setOrder] = useState("");

    const [formStatus, setFormStatus] = useState<FormStatus>("READY");
    const [pageStatus, setPageStatus] = useState<PageStatus>("INITIAL");
    const [searchAnimalList, setSearchAnimalList] = useState<AnimalAllListResponse | null>(null);
    
    function submitSearch(event: FormEvent) {
        event.preventDefault();
        setFormStatus("SUBMITTING");
        AnimalSearch(
            animalName,
            species,
            animalClass,
            typeName,
            aquisitionDate,
            age,
            order,
        )
          .then(data => setSearchAnimalList(data))
          .catch(() => setFormStatus("ERROR"))
          .then(() => setPageStatus("RESULTS"))
          .then(() => setFormStatus("READY"));
    }

    if (pageStatus === "RESULTS") {
        return (
            <div>
                <div className="content-sub-container">
                <h1 className="title">Search Animals</h1>
                </div>
                <div className="content-sub-container">
                    <form onSubmit={submitSearch}>
                        <label className="search-label">
                            Animal Name
                            <input className="search-input" value={animalName} onChange={(event) => setAnimalName(event.target.value)}/>
                        </label>
                        <label className="search-label">
                            Species
                            <input className="search-input" value={species} onChange={(event) => setSpecies(event.target.value)}/>
                        </label>
                        <label className="search-label">
                            Animal Class
                            <input className="search-input" value={animalClass} onChange={(event) => setAnimalClass(event.target.value)}/>
                        </label>
                        <label className="search-label">
                            Animal Type
                            <input className="search-input" value={typeName} onChange={(event) => setTypeName(event.target.value)}/>
                        </label>
                        <label className="search-label">
                            Aquisition Date
                            <input className="search-input"  type="date" value={aquisitionDate} onChange={(event) => setAquisitionDate(event.target.value)}/>
                        </label>
                        <label className="search-label">
                            Age
                            <input className="search-input" type="number" value={age} onChange={(event) => setAge(event.target.value)}/>
                        </label>
                        <label className="search-label">
                                Order by
                                <select className="search-input" name="orderby" onChange={(event) => setOrder(event.target.value)}>
                                    <option value="" selected>Please choose one</option>
                                    <option value="animalname">Animal Name</option>
                                    <option value="animalclass">Animal Class</option>
                                    <option value="typename">Animal Type</option>
                                </select>
                        </label>
                        <button className="form-button" type="submit">
                            Search
                        </button>
                        {/* <button className="form-button" type="reset" onClick={() => clearSearch()}>
                            Clear
                        </button> */}
                    </form>
                </div>
                {searchAnimalList?.animalAllResponseList && searchAnimalList.animalAllResponseList.length> 0 ? results() : noResults() }
            </div>
        );
    }

    function results () {
        return (
                <div className="content-sub-container">
                    <table className="table body-text">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Sex</th>
                            <th scope="col">Aquisition Date</th>
                            <th scope="col">DOB</th>
                            <th scope="col">Type</th>
                            <th scope="col">Species</th>
                            <th scope="col">Class</th>
                        </tr>
                        </thead>
                        <tbody>
                            {searchAnimalList?.animalAllResponseList?.map((x) => <SearchAnimalTable {...x} />)}
                        </tbody>
                    </table>
                </div>
        );
    } 
    function noResults(){
        return (
          <p>No Matching Results Found</p>
        )
    }

    return (
        <div>
            <div className="content-sub-container">
            <h1 className="title">Search Animals</h1>
            </div>
            <div className="content-sub-container">
                <form onSubmit={submitSearch}>
                    <label className="search-label">
                        Animal Name
                        <input className="search-input" value={animalName} onChange={(event) => setAnimalName(event.target.value)}/>
                    </label>
                    <label className="search-label">
                        Species
                        <input className="search-input" value={species} onChange={(event) => setSpecies(event.target.value)}/>
                    </label>
                    <label className="search-label">
                        Animal Class
                        <input className="search-input" value={animalClass} onChange={(event) => setAnimalClass(event.target.value)}/>
                    </label>
                    <label className="search-label">
                        Animal Type
                        <input className="search-input" value={typeName} onChange={(event) => setTypeName(event.target.value)}/>
                    </label>
                    <label className="search-label">
                        Aquisition Date
                        <input className="search-input"  type="date" value={aquisitionDate} onChange={(event) => setAquisitionDate(event.target.value)}/>
                    </label>
                    <label className="search-label">
                        Age
                        <input className="search-input" type="number" value={age} onChange={(event) => setAge(event.target.value)}/>
                    </label>
                    <label className="search-label">
                            Order by
                            <select className="search-input" name="orderby" onChange={(event) => setOrder(event.target.value)}>
                                <option value="" selected>Please choose one</option>
                                <option value="animalname">Animal Name</option>
                                <option value="animalclass">Animal Class</option>
                                <option value="typename">Animal Type</option>
                            </select>
                    </label>
                    <button className="form-button" type="submit">
                        Search
                    </button>
                    {/* <button className="form-button" type="reset" onClick={() => clearSearch()}>
                        Clear
                    </button> */}
                </form>
            </div>
        </div>
    
    );
}