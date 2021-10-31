import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://hidden-lowlands-63072.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className="mb-5 pb-5">
            <hr />
            <h2 className="text-purple fw-bold mt-5 pt-5 pb-3">Our services</h2>
            <div className="container g-4 row row-cols-1 row-cols-md-3  mx-auto">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;