import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const LogIn = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset();
    };

    return (
        <div>
            <h3>Sign Into Your Account</h3>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input   {...register("email", { required: true })} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input  {...register("password", { required: true })} type="password" class="form-control" id="exampleInputPassword1" />
                    {errors.password && <span>This field is required</span>}
                </div>

                <p>Forgot Your Password ? <Link to="#">Click Now</Link> </p>

                <button type="submit" class="my-btn w-100 p-2 mb-3">Submit</button>
                {/* */}
            </form>
            <p>Don't have an account?<Link to="/login/register">Register Now</Link></p>

        </div>
    );
};

export default LogIn;