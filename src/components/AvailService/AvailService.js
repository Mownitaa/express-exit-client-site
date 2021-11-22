import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const AvailService = () => {
    const { user } = useAuth();
    const { serviceId } = useParams();
    const [service, setService] = useState([]);
    // console.log(service);
    useEffect(() => {
        fetch(`https://hidden-lowlands-63072.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    return (
        <div className="mb-5 pb-5">
            <h2 className="text-purple fw-bold mt-5 mb-4 pb-5">Avail The Service Now <p>_________</p> </h2>

            <div className="d-flex align-items-start ms-5"> You Are Logged In As : <span className="text-purple"> {user.email}({user.displayName})</span></div>

            <div className="container p-5 card mb-3 shadow">
                <div className="row g-0">
                    <h6 className="text-purple pb-5 mb-5"><u><i>"Service ID: {serviceId}"</i></u></h6>
                    <div className="col-md-4">
                        <img src={service.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title text-purple">Service Name:{service.name}</h5>
                            <p className="card-text">{service.description}</p>
                            <button className="p-3 mt-3 border-danger rounded bg-white fs-6">
                                <NavLink className="text-decoration-none text-purple" to="/services">Back To Services</NavLink>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            {/* confirm to avail */}


            <h4 className="text-purple mt-5 pt-5">For the confirmation to avail the service give your information below</h4>
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
                <button type="submit" className="btn btn-primary"><Link to="/myService" className="text-white text-decoration-none">Confirm To Avail Services</Link></button>
            </form>



        </div>
    );
};

export default AvailService;


// style="max-width: 540px;"