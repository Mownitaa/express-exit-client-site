import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const ManageService = ({ manageService }) => {
    const { _id, name, description, img } = manageService;

    const [manageServices, setManageServices] = useState([]);
    useEffect(() => {
        fetch('https://hidden-lowlands-63072.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setManageServices(data));
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://hidden-lowlands-63072.herokuapp.com/services/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deleteCount > 0) {
                        alert('Deleted Successfully');
                        const remainingServices = manageServices.filter(manageServices => manageServices._id !== id);
                        setManageServices(remainingServices);
                    }
                })
        }
    }

    return (
        <div style={{ width: '30%' }} className="bg-white m-3 border rounded service-container">
            <div className="service pb-3">
                <img className="img-fluid service-img pt-3" src={img} alt="" />
                <h3 className="pt-3 fw-bold">{name}</h3>
                <p className="px-3">{description}</p>

                <button onClick={() => handleDelete(manageService._id)} className="btn btn-danger">Remove</button>

                <Link className="ms-2" to="/addService">
                    <button style={{ color: '#ffff', backgroundColor: '#E8A698' }} className="btn btn-light">Add</button>
                </Link>
            </div>

        </div>
    );
};

export default ManageService;