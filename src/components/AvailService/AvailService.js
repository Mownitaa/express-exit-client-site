import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const AvailService = () => {
    // const { _id, name, description, img } = service;
    const { user } = useAuth();
    const { serviceId } = useParams();
    const [service, setService] = useState([]);
    // console.log(service);
    useEffect(() => {
        fetch(`https://express-exit-server-site-64i4q8m8l-mownitaa.vercel.app/services/${serviceId}`)
        // fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    return (
        <div className="mb-5 pb-5">
            <h2 style={{ color: '#589492' }} className=" fw-bold mt-5 mb-4 pb-5">Avail The Service Now  </h2>

            {/* <div style={{ color: '#ce6e5d' }} className="d-flex align-items-start ms-5"> You Are Logged In As : <span> {user.email}({user.displayName})</span></div> */}

            <div className="container p-5 card mb-3 shadow">
                <div className="row g-0">
                    {/* <h6 style={{ color: '#cd8e5d' }} className="pb-5 mb-5"><u><i>"Service ID: {serviceId}"</i></u></h6> */}
                    <div className="col-md-4">
                        <img src={service.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 style={{ color: '#D2A698', fontWeight: 'bold', marginBottom: '25px' }} className="card-title">Service Name:{service.name}</h3>
                            <p style={{ color: '#cd8e5d' }} className="card-text">{service.description}</p>

                        </div>
                    </div>
                </div>
                <button style={{ backgroundColor: '#D2A698' }} className="mt-5 p-3 w-25 mx-auto mt-3 border border-none text-light rounded fs-6 shadow">
                    <NavLink className="text-decoration-none  text-light" to="/services">Back To Services</NavLink>
                </button>
            </div>


            {/* confirm to avail */}


            <h4 style={{ color: '#cd8e5d' }} className="mt-5 pt-5 mb-3">For the confirmation to avail the service give your information below</h4>
            <form className="container w-50 shadow p-5 mb-5">
                <div className="mb-3">

                    <input type="text" className="form-control" id="exampleInputPassword1" value={user.displayName} placeholder="Your Full Name" />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={user.email} placeholder="Your Email" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">

                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Shipping Address" required />
                </div>
                <div className="mb-3">

                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Optional Message" />
                </div>

                <div className="mb-3">

                    <input type="date" className="form-control" id="birthday" required />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="d-flex align-items-start form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button style={{ backgroundColor: '#D2A698' }} type="submit" className="btn px-4 py-2 shadow"><Link to='/myService' className="text-white text-decoration-none">Confirm To Avail Services</Link></button>
            </form>



        </div>
    );
};

export default AvailService;


// style="max-width: 540px;"