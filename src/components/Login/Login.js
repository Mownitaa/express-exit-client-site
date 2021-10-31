import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'
const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="mb-5 pb-5">
            <hr />
            <h2 className="text-purple fw-bold mt-5">Please Login!!!</h2>

            <form className="container mt-5 pt-5">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label ">Email address</label>
                    <input type="email" className="form-control w-50 mx-auto input-field " disabled id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control l w-50 mx-auto input-field" disabled id="exampleInputPassword1" placeholder="Password" />
                </div>

                <button type="submit" className="btn btn-danger mt-3 p-2">Submit</button>
            </form>

            <div className="mt-3"> <h4>or</h4></div>
            <button onClick={handleGoogleLogIn}
                className="btn-regular pe-5 ps-3 py-2 border border-none bg-primary"><i className="fab fa-google p-2 text-white me-3 fw-bold border border-5 rounded"></i> <span className="text-white fs-5"> Log In With Google</span> </button>
        </div>
    );
};

export default Login;