import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';



const Service = ({ service }) => {
    const { _id, name, description, img } = service;
    return (
        <div className="bg-white border rounded service-container">
            <div className="service pb-3 m-2  p-2">
                <img className="img-fluid service-img pt-3" src={img} alt="" />
                <h3 className="pt-3 text-purple fw-bold">{name}</h3>
                <p className="px-3">{description}</p>
                <Link to={`/services/${_id}`}>
                    <button className="btn btn-danger">Avail Now</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;
