import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddService.css';
const AddService = () => {
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
            })
    }


    return (
        <div className="add-service my-5">
            <h2 className="text-purple fw-bold mb-5">Add A New Service</h2>
            <form className="w-50 m-auto d-flex justify-content-center align-items-center row" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Your Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input {...register("img")} placeholder="Image URL" />
                <input className="w-25 fluid text-purple fw-bold mb-5" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddService;