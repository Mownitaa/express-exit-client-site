import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import pic from './pizza-delivery-man-presenting-something_1368-8218-removebg-preview.png';


// const pic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ugYnvX9p9u2RoaiCLcmWAepNWECdQMHi9uhat8ouDna7qdZN_7tvD06sMq4Y9nsuIDQ&usqp=CAU";
// const pic = "https://image.freepik.com/free-photo/pizza-delivery-man-presenting-something_1368-8218.jpg";


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://express-exit-server-site-64i4q8m8l-mownitaa.vercel.app/services')
        // fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
            // .catch(error => console.log('Authorization failed : ' + error.message));
    }, [])

    return (
        <div className="mb-5 pb-5">
            <hr />
            <h2 style={{ color: '#689492' }} className="fw-bold mt-5 pt-5 pb-5 mb-5">Our services</h2>
            <div className="d-flex">
                <div className="container g-5 row row-cols-1 row-cols-md-4  ">
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
                <div>
                    <img className="mt-5" style={{ marginLeft: '-450px', width: '1300%' }} src={pic} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Services;