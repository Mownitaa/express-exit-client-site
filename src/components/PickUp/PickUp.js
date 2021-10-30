import React from 'react';
import pickUpPointsImg from './pick-up-points.png';
import pickUp from './pickUp.png'
import './PickUp.css'
const PickUp = () => {

    return (
        <div className="py-5">
            <h2 className="text-purple fw-bold">Pick Up Point</h2>
            <div className=" d-flex justify-content-center align-items-center row row-cols-sm-12 row-cols-md-4 g-4 pt-5 bg-light mx-5">
                <div className="col-md-5">
                    <h3 className="text-purple fw-bold">Pick Up From Office</h3>
                    <p className="fs-5">We are giving you the facility to pick your ordered products from our office </p>
                    <hr />
                    <h5 className="mt-5 pt-4"><i className="fas fa-street-view text-purple fw-bold fs-4 me-2"></i> DEPZ,Savar,Dhaka</h5>
                </div>
                <div className="col-md-5">
                    <img className="img-fluid" src={pickUp} alt="" />
                </div>
            </div>
            <div className="mt-4">
                <h2 className="text-purple fw-bold">How Do Our Pick Up Points Work?</h2>
                {/* <p>________________________</p> */}
                <img className="w-50" src={pickUpPointsImg} alt="" />
            </div>
        </div >
    );
};

export default PickUp;