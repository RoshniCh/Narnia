import React, { FormEvent, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './AddAnimal.scss'
import { AnimalSubmit } from '../../App/apiClient'

export function AddAnimal() : JSX.Element {
    type FormStatus = "READY" | "SUBMITTING" | "ERROR" | "FINISHED";
    const [animalName, setAnimalName] = useState("");
    const [typeName, setTypeName] = useState("");
    const [species, setSpecies] = useState("");
    const [animalClass, setAnimalClass] = useState("");
    const [sex, setSex] = useState("");
    const [aquisitionDate, SetAquisitionDate] = useState("");
    const [DOB, SetDOB] = useState("");
    const [status, setStatus] = useState<FormStatus>("READY");

    function FormSubmit(event : FormEvent) {
        event.preventDefault();
        setStatus("SUBMITTING");
        AnimalSubmit ({
            typeName,
            species,
            animalClass,
            animalName,
            sex,
            aquisitionDate,
            DOB,
        })
        .then(() => setStatus("FINISHED"))
        .catch(() => setStatus("ERROR"));
    }

    function clearAddForm () {
        setAnimalName("");
        setTypeName("");
        setSpecies("");
        setAnimalClass("");
        setSex("");
        SetAquisitionDate("");
        SetDOB("");
    }

    if (status === "FINISHED") {
        return (
            <div className="content-container">
            <p className="body-text">Form submitted successfully!</p>
            <p className="body-text">Your animal is now added!</p>
            <button className="form-button" onClick={() => setStatus("READY")}>Submit another animal?</button>
            <br></br>
            <Link to="/">Return to Homepage?</Link>
            </div>
        );
        } 

    return (
        <div>
            <div className="content-sub-container">
            <h1 className="title">Add Animal</h1>
            </div>
            <div className="content-container">
            <form onSubmit={FormSubmit}>
                <div className="row">
                    <div className="col">
                        <label className="form-label">
                            Animal Name
                            <input className="form-input" type = "text" onChange={(event) => setAnimalName(event.target.value)}  required/>
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <label className="form-label">
                            Animal Type
                            <input className="form-input" type = "text" onChange={(event) => setTypeName(event.target.value)} required/>
                        </label>
                    </div>
                    <div className="col-sm-4">
                        <label className="form-label">
                            Animal Species
                            <input className="form-input" type = "text" onChange={(event) => setSpecies(event.target.value)} required/>
                        </label>
                    </div>
                    <div className="col-sm-4">
                        <label className="form-label">
                            Animal Class
                            <input className="form-input" type = "text" onChange={(event) => setAnimalClass(event.target.value)} required/>
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <label className="form-label">
                            Animal Sex
                            <select className="form-input" onChange={(event) => setSex(event.target.value)} required>
                                <option value="">Please select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </label>
                    </div>
                    <div className="col-sm-4">
                        <label className="form-label">
                            Aquisition Date
                            <input className="form-input" type = "Date" onChange={(event) => SetAquisitionDate(event.target.value)} required/>
                        </label>
                    </div>
                    <div className="col-sm-4">
                        <label className="form-label">
                            Date of Birth
                            <input className="form-input" type = "Date" onChange={(event) => SetDOB(event.target.value)} required/>
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-1">
                        <button className="form-button" type="submit"> Submit</button>
                    </div>
                    <div className="col-sm-2">
                        <button className="form-button" type="reset" onClick={() => clearAddForm()}> Clear</button>
                    </div>
                </div>
            </form>
            </div>
        </div>
    );

}