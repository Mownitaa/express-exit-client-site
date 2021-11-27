// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
// import useAuth from '../../hooks/useAuth';

// const MyService = () => {


//     const { user } = useAuth();
//     const { serviceId } = useParams();
//     const [myService, setMyService] = useState([]);
//     // console.log(service);
//     useEffect(() => {
//         fetch(`https://hidden-lowlands-63072.herokuapp.com/services/${serviceId}`)
//             .then(res => res.json())
//             .then(data => setMyService(data));
//     }, [])


//     return (
//         <div className="mb-5 pb-5">
//             <h2 style={{ color: '#589492' }} className=" fw-bold mt-5 mb-4 pb-5">The Service I Want To Avail  </h2>

//             <div className="container p-5 card mb-3 shadow">
//                 <div className="row g-0">
//                     <div className="col-md-4">
//                         <img src={myService.img} className="img-fluid rounded-start" alt="..." />
//                     </div>
//                     <div className="col-md-8">
//                         <div className="card-body">
//                             <h3 style={{ color: '#D2A698', fontWeight: 'bold', marginBottom: '25px' }} className="card-title">Service Name:{myService.name}</h3>
//                             <p style={{ color: '#cd8e5d' }} className="card-text">{myService.description}</p>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MyService;