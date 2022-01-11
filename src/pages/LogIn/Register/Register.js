import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset();
    };
    return (
        <div>
            <h3>Create an account</h3>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div class="mb-2">
                    <label for="exampleInputEmail1" class="form-label">Enter Name</label>
                    <input   {...register("name", { required: true })} type="text" class="form-control"/>
                </div>
                <div class="mb-2">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input   {...register("email", { required: true })} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-2">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input  {...register("password", { required: true })} type="password" class="form-control" id="exampleInputPassword1" />
                    {errors.password && <span>This field is required</span>}
                </div>
                <div class="mb-2">
                    <label for="RePassword" class="form-label">RePassword</label>
                    <input  {...register("rePassword", { required: true })} type="password" class="form-control" id="exampleInputPassword1" />
                    {errors.rePassword && <span>This field is required</span>}
                </div>


                <button type="submit" class="my-btn w-100 p-2 mb-3 mt-3">Submit</button>
                {/* */}
            </form>
            <p>Already Registered? <Link to="/login">Login Now</Link></p>
           
        </div>
    );
};

export default Register;