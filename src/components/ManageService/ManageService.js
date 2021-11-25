import React from 'react';
import { Link } from 'react-router-dom';


const ManageService = ({ manageService }) => {
    const { _id, name, description, img } = manageService;

    return (
        <div className="bg-white m-3 border rounded service-container">
            <div className="service pb-3">
                <img className="img-fluid service-img pt-3" src={img} alt="" />
                <h3 className="pt-3 fw-bold">{name}</h3>
                <p className="px-3">{description}</p>
                <Link className="me-2" to={`/services/${_id}`}>
                    <button className="btn btn-danger">Remove</button>
                </Link>
                <Link to="/addService">
                    <button style={{ color: '#ffff', backgroundColor: '#E8A698' }} className="btn btn-light">Add</button>
                </Link>
            </div>

        </div>
    );
};

export default ManageService;