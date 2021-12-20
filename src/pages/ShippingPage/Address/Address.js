import React from 'react';
import { useForm } from "react-hook-form";

const Address = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="my-5">
            <div className="form-floating mb-3">
                <input className="form-control" defaultValue="test" {...register("name", { required: true })} />
                <label for="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-3">

                <input className="form-control"  {...register("email", { required: true })} />
                <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">

                <input className="form-control"  {...register("phonNumber", { required: true })} />
                <label for="floatingInput">Phone Number</label>
            </div>
           
            
            <div className="form-floating mb-3">

                <input className="form-control"  {...register("district", { required: true })} />
                <label for="floatingInput">District Name</label>
            </div>
           
            
            <div className="form-floating mb-3">

                <input className="form-control"  {...register("upazila", { required: true })} />
                <label for="floatingInput">Upazila Name</label>
            </div>


            <input className="my-btn p-3 w-100" type="submit" value="conform Order"/>
        </form>
    );
};

export default Address;