import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddService.css';
const AddService = () => {
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = data => {
        console.log(data);
        axios.post('https://express-exit-server-site-64i4q8m8l-mownitaa.vercel.app/services', data)
        // axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
            })
    }


    return (
        <div style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdocgTxI7T-NMiImKsp0-EAYCS4ZIY_hjsgw&usqp=CAU")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="add-service my-5 p-5">
            <h2 style={{ color: '#589492' }} className=" fw-bold mb-5">Add A New Service</h2>
            <form className="w-50 m-auto d-flex justify-content-center align-items-center row" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} className="shadow border border-light" placeholder="Service Name" />
                <textarea className="shadow  border border-light" {...register("description")} placeholder="Description" />
                <input className="shadow  border border-light" {...register("img")} placeholder="Image URL" />
                <input style={{ backgroundColor: '#E8A698', color: '#fff', letterSpacing: 2 }} className="w-25 fluid fw-bold mb-5 shadow  border rounded border-light" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddService;