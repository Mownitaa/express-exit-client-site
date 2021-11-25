import React from 'react';
import './Membership.css';
const Membership = () => {
    return (
        <div>
            <hr />
            <p style={{ color: '#689492' }}>Create a membership account to get 5% discount on every delivery</p>


            <div className="d-flex justify-content-center align-items-center my-5 pb-5 row row-cols-sm-12 row-cols-md-12 g-4 mx-auto">

                {/* user info */}
                <div className="d-flex flex-md-column align-items-start p-3 col-md-6">
                    <h3 style={{ color: '#689492' }} >Give Your Information</h3>
                    <form>
                        <fieldset >

                            <div className="mb-3">

                                <input type="text" id="disabledTextInput" className="form-control inputField" placeholder="First Name" />
                            </div>
                            <div className="mb-3">

                                <input type="text" id="disabledTextInput" className="form-control inputField" placeholder="Last Name" />
                            </div>
                            <div className="mb-3">

                                <input type="text" id="disabledTextInput" className="form-control inputField" placeholder="Email" />
                            </div>
                            <div className="mb-3">

                                <input type="text" id="disabledTextInput" className="form-control inputField" placeholder="Phone Number" />
                            </div>
                            <div className="mb-3">

                                <input type="text" id="disabledTextInput" className="form-control inputField" placeholder="Enter a pin" />
                            </div>
                            <div className="mb-3">

                                <input type="text" id="disabledTextInput" className="form-control inputField" placeholder="Re-enter a pin" />
                            </div>

                            <button style={{ backgroundColor: '#E8A698' }} type="submit" className="btn submit-btn text-white px-5 py-2">Submit</button>
                        </fieldset>
                    </form>
                </div>


                {/* contact info */}
                <div className="d-flex flex-md-column align-items-start p-3 col-md-3">
                    <h2 style={{ color: '#689492' }} className="fw-bold"><i className="fas fa-phone-volume"></i> Helpline</h2>
                    <p style={{ color: '#E8A698' }}>09346338y</p>
                    <br />
                    <h2 style={{ color: '#689492' }} className="fw-bold"><i className="fas fa-envelope"></i> Email</h2>
                    <p style={{ color: '#E8A698' }}>e.exit@gmail.com</p>
                    <br />
                    <h2 style={{ color: '#689492' }} className="fw-bold"><i className="fas fa-map-marker-alt"></i> Address</h2>
                    <h4 style={{ color: '#E8A698' }}>DEPZ,Savar,Dhaka</h4>
                    <p style={{ color: '#E8A698' }}>Hajipara Singapore market</p>
                    <p style={{ color: '#E8A698' }}> Unit-02, First floor
                        279,280,281 No.</p>
                    <p style={{ color: '#E8A698' }}>office
                        Agrabad Access road
                        Agrabad,</p>
                </div>


            </div>
        </div>
    );
};

export default Membership;