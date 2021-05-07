import React, { FormEvent, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './AnimalType.scss'
import { GetAnimalTypeList, AnimalTypeListResponse, AnimalTypeResponse } from '../../App/apiClient'


export function AnimalTypeTable(data: AnimalTypeResponse): JSX.Element {
  
    return (
      <tr>
        <td>{data.id}</td>
        <td>{data.typeName}</td>
        <td>{data.species}</td>
        <td>{data.class}</td>
        <td>{data.count}</td>
      </tr>
    );
}

export function AnimalType () : JSX.Element {
    const [allAnimalType, setAllAnimalType] = useState<AnimalTypeListResponse | null>(null);;
    useEffect(() => {
        GetAnimalTypeList()
        .then (data => setAllAnimalType(data))
    }, []
    );

    return (
        <div>
            <div className="content-sub-container">
            <h1 className="title">Animal Type</h1>
            </div>
            <div className="content-container">
                <table className="table body-text">
                    <thead>
                        <tr>
                            <th scope="col">Animal Type Id</th>
                            <th scope="col">Type Name</th>
                            <th scope="col">Species</th>
                            <th scope="col">Class</th>
                            <th scope="col">Count</th>
                        </tr>
                        </thead>
                        <tbody>
                            {allAnimalType?.animalTypeResponseList?.map((x) => <AnimalTypeTable {...x} />)}
                        </tbody>
                    </table>
            </div>
        </div>
    );
}