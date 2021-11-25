import React from 'react';
const Banner = () => {

    const satisfiedCustomer = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmH3UGiiYqn1xJK8Fz9pIhT54zNI_vgwHBEyWmlKbNXOGTqhuvKnW-Polb6COe8Zhn3n4&usqp=CAU";
    const activeWorker = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiOThaiIaIm92GA0Skp7VFPWeXuQT_JuCqjw&usqp=CAU";
    const productDelivered = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-VUETbFTDO20OjxH14pxw7Zf_0lp2cibTaAUyLRbD7yQK6dttbEqzPjgf9jmGhUREuy4&usqp=CAU";
    const bannerImg = "https://img.freepik.com/free-psd/closeup-delivery-man-hand-medical-gloves-holding-cardboard-box-mockup-template_34168-1933.jpg?size=626&ext=jpg";




    return (

        <div>
            <div style={{ marginBottom: '50px' }} className="d-flex justify-content-center align-items-center row row-cols-sm-12 row-cols-md-4 mt-5 mb-3">

                <div className="col-md-7">
                    <img className="img-fluid w-100" src={bannerImg} alt="" />
                </div>
                <div style={{ textAlign: 'left' }} className="col-md-5">
                    <h1 style={{ color: '#589492' }} className="fw-bold animate__animated animate__backInRight">Need Faster Delivery?</h1>
                    <h6 style={{ color: '#97080D' }} className="animate__animated animate__backInLeft">We deliver as fast as you would expect</h6>
                    <br /><br />
                    <span style={{ color: '#ce6e5d' }}>
                        <p> <i style={{ color: '#689492' }} className="fas fa-chevron-right pe-2"></i>Fast Delivery</p>
                        <p> <i style={{ color: '#689492' }} className="fas fa-chevron-right pe-2"></i>Parcel Delivery</p>
                        <p> <i style={{ color: '#689492' }} className="fas fa-chevron-right pe-2"></i>Packaging</p>
                        <p> <i style={{ color: '#689492' }} className="fas fa-chevron-right pe-2"></i>Label Printing</p>
                        <p> <i style={{ color: '#689492' }} className="fas fa-chevron-right pe-2"></i>Customer Service</p>
                        <p> <i style={{ color: '#689492' }} className="fas fa-chevron-right pe-2"></i>Storage</p>
                        <p> <i style={{ color: '#689492' }} className="fas fa-chevron-right pe-2"></i>Merchant Panel</p>
                        <p> <i style={{ color: '#689492' }} className="fas fa-chevron-right pe-2"></i>Regular Payout</p>
                    </span>
                    <br />
                    <button style={{ color: '#133238', backgroundColor: '#E8A698' }} className="px-4 py-2 border rounded mt-4 fw-bolder">Find An Errand Boy</button>
                </div>

            </div>




            {/* avtivity part */}

            <div style={{ height: '300px', color: '#133238' }} className="container d-flex justify-content-center align-items-center pb-5 fw-bold mt-5">

                <div className="pe-5  me-5 mt-3">
                    <img style={{ width: '70%', marginBottom: '30px', marginTop: '40px' }} src={activeWorker} alt="" />
                    <h1 style={{ color: '#589492' }}>100</h1>
                    <p >Active Workers</p>
                </div>

                <div className="pe-5 me-5 ms-4">
                    <img style={{ width: '110%' }} src={satisfiedCustomer} alt="" />
                    <h1 style={{ color: '#589492' }}>16668</h1>
                    <p>Satisfied Customers</p>
                </div>
                <div className="mt-5" >
                    <img style={{ width: '100%' }} src={productDelivered} alt="" />
                    <h1 style={{ color: '#589492' }}>126331</h1>
                    <p>Product Delivered</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;


// background: "linear-gradient(white 70%,#E8A698 30%)"