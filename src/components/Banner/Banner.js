import React from 'react';
// import bannerImg from './express-delivery-banner.png'
const Banner = () => {
    // const bannerImg = "https://image.similarpng.com/thumbnail/2020/04/express-delivery-service-courier-boy-riding-motor-bike-banner-png.png";
    const bannerImg = "https://image.freepik.com/free-vector/express-delivery-service-courier-boy-riding-motor-bike-banner_48369-16679.jpg";
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center bg-white p-5 mx-5 row row-cols-sm-12 row-cols-md-4 ">
                <div className="col-md-5">
                    <h1 className="text-purple fw-bold">Need Faster Delivery?</h1>
                    <h5>We deliver as fast as you would expect</h5>
                    <button className="px-4 py-2 border rounded mt-4 text-primary fw-bolder">Find An Errand Boy</button>
                </div>
                <div className="col-md-5">
                    <img className="img-fluid" src={bannerImg} alt="" />
                </div>
            </div>
            <div className="container d-flex justify-content-center align-items-center text-white fw-bold bg-danger">
                <div className="pe-5 me-5">
                    <h1>16668</h1>
                    <p>Satisfied Customers</p>
                </div>
                <div className="pe-5  me-5">
                    <h1>100</h1>
                    <p>Active Workers</p>
                </div>
                <div>
                    <h1>126331</h1>
                    <p>Product Delivered</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;