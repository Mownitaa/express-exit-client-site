import React, { useEffect, useState } from 'react';
import ManageService from '../ManageService/ManageService';

const ManageServices = () => {

    const [manageServices, setManageServices] = useState([]);
    useEffect(() => {
        fetch('https://express-exit-server-site-64i4q8m8l-mownitaa.vercel.app/services')
        // fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setManageServices(data));
    }, [])
    return (
        <div className="mb-5 pb-5">
            <hr />
            <h2 style={{ color: '#689492' }} className="fw-bold mt-5 pt-5 pb-5 mb-5">Manage Services</h2>
            <div className="d-flex mx-auto justify-content-center align-items-center ms-5 ps-5  ">
                <div className="container g-4 row row-cols-1 row-cols-md-4">
                    {
                        manageServices.map(manageService => <ManageService
                            key={manageService._id}
                            manageService={manageService}
                        ></ManageService>)
                    }

                </div>
            </div>
        </div >
    );
};

export default ManageServices;