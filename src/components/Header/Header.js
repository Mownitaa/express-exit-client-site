import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className=" nav-bar">
            <nav className="navbar navbar-expand-lg navbar-light  px-3 nav-bar">
                <div className="container-fluid">
                    <Link className="logo navbar-brand fw-bold fs-3 pe-5" to="#"> <span className="logo">Express Exit</span> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/pickup">Pick Up</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/membership">Membership</Link>
                            </li>


                            <li className="nav-item">
                                <Link className="nav-link" to="/service/:serviceId">Avail Service</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/myServices">My Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/manage">Manage</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/addService">Add Service</Link>
                            </li>

                            <li className="nav-item">
                                {
                                    user.email ?
                                        <li> <button className=" btn btn-info text-white fw-bold" onClick={logOut}>Log out</button> </li> :
                                        <Link className="nav-link" to="/login">Login</Link>
                                }
                            </li>
                            <span className="mt-2 text-purple ms-2">{user.displayName}</span>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;