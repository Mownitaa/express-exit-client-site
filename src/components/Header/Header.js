import { Offcanvas, Table } from 'react-bootstrap';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from './logo.png'
import './Header.css';
import 'animate.css';

const Header = () => {
    const { user, logOut } = useAuth();

    // offcanvas
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //   
    console.log(user);
    return (
        <div className="shadow nav-bar header top-fixed">
            <nav className="navbar navbar-expand-lg navbar-light nav-bar">
                <div className="container-fluid">
                    <Link className="logo navbar-brand fw-bold fs-3" to="/"> <span className="logo">  <img style={{ width: '15%' }} src={logo} alt="..." />   Express Exit</span> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul style={{ paddingLeft: '13%' }} className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
                            <li className="nav-item">
                                <Link style={{ color: '#97080D', fontSize: '18px' }} className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    style={{ color: '#d88d7f', fontSize: '18px' }}
                                    className="nav-link" to="/services">Services</Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    style={{ color: '#97080D', fontSize: '18px' }}
                                    className="nav-link" to="/pickup">Pick Up</Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    style={{ color: '#97080D', fontSize: '18px' }}
                                    className="nav-link" to="/membership">Membership</Link>
                            </li>

                            <li className="nav-item pr-5">
                                {user.email || user.photoURL ?
                                    <div style={{ marginRight: '-700px' }} className=" d-flex justify-content-center align-items-center">

                                        <span style={{ color: '#d88d7f', fontSize: '18px' }} className=" mt-2 me-2 mb-2">{user.displayName} </span>
                                        <button style={{ backgroundImage: `url(${user.photoURL})`, backgroundSize: 'cover', height: '50px', width: '50px', borderRadius: '50%' }} className="border border-2 border-danger animate__animated animate__heartBeat
                                        animate__infinite	infinite" onClick={handleShow}>

                                            {/* <img className="userImg rounded-circle" src={`${user.photoURL}`} alt="..." /> */}
                                        </button>
                                        <Offcanvas className="quality" show={show} onHide={handleClose} placement="end">
                                            <Offcanvas.Header className="ms-auto" closeButton>
                                            </Offcanvas.Header>
                                            <Offcanvas.Body>
                                                <div className=" d-flex justify-content-center align-items-center">
                                                    <div className="d-flex flex-column justify-content-center align-items-center">
                                                        <div className="user-profile mb-4">
                                                            <img src={user.photoURL} alt="user-profile" />
                                                        </div>
                                                        <h4 className="mb-3">{user.displayName}</h4>
                                                        <p>{user.email}</p>
                                                        <button onClick={logOut} className="px-5 btn btn-danger text-white rounded-pill"> Logout</button>
                                                    </div>
                                                </div>
                                                <Table hover className="mt-5">
                                                    <tbody>
                                                        <Link to=""></Link>
                                                        <tr>
                                                            <td>
                                                                <Link style={{ color: '#589492' }} className="text-uppercase text-decoration-none text-color" to="/myService">My Services</Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <Link style={{ color: '#589492' }} className="text-uppercase text-decoration-none text-color" to="/manageServices">Manage Service</Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <Link style={{ color: '#589492' }} className="text-uppercase text-decoration-none text-color" to="/addService">Add A Service<span class="badge bg-dark rounded-pill ms-2">New</span></Link>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Offcanvas.Body>
                                        </Offcanvas>
                                    </div>
                                    :
                                    // <p>Hello!</p>
                                    <li className="nav-item pr-5">
                                        {
                                            user.email ?
                                                <li> <button className=" btn btn-info text-white fw-bold" onClick={logOut}>Log out</button> </li> :
                                                <Link
                                                    style={{ marginRight: '-700px' }} className="nav-link ms-5 fs-5  text-primary" to="/login">Login
                                                    <i className="ms-2 fas fa-sign-in-alt"></i>
                                                </Link>
                                        }
                                    </li>
                                }
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;