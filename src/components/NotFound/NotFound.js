import React from 'react';
import { NavLink } from 'react-router-dom';
import notFoundImg from './sorry.png'
import './NotFound.css'
// const notFoundImg 
const NotFound = () => {
    return (
        <div className="container d-flex  justify-content-center lh-lg">
            <div className="text-center w-50 py-5 m-4">
                <p className="notFound-text fw-bolder"><span className="pe-4">404!!!</span>Page Not Found</p>

                {/* notfound image */}
                <img className="sorryImg" src={notFoundImg} alt="" />

                <div className="mt-5 ms-3">
                    {/* homepage button */}
                    {/* <button className="m-3">  */}
                    <NavLink className=" text-decoration-none text-dark p-4 fw-bolder border border-light rounded border-5" to="/home"><span className="home-btn">GO TO HOME</span></NavLink>
                    {/* </button> */}
                </div>
            </div>
        </div>
    );
};

export default NotFound;
