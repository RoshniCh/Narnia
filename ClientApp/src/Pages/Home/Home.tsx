import React, { FormEvent, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Home.scss'

export function Home () : JSX.Element {
    return (
        <div>
            <div className="content-sub-container">
            <h1 className="title">Welcome to Narnia, the World of Amazing Animals</h1>
            </div>
        </div>
    );
}