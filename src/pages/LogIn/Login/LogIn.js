import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const LogIn = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { loginUser, error} = useAuth().firebaseInfo;
    const onSubmit = data => {
        // console.log(data);
        loginUser(data.email, data.password);
        
        reset();
    };
    // console.log(error, user)

    return (
        <div>
            <h3>Sign Into Your Account</h3>
            <p style={{color: "red"}}>{error}</p>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input   {...register("email", { required: true })} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input  {...register("password", { required: true })} type="password" className="form-control" id="exampleInputPassword1" />
                    {errors.password && <span>This field is required</span>}
                </div>

                <p>Forgot Your Password ? <Link to="#">Click Now</Link> </p>

                <button type="submit" className="my-btn w-100 p-2 mb-3">Submit</button>
                {/* */}
            </form>
            <p>Don't have an account?<Link to="/login/register">Register Now</Link></p>

        </div>
    );
};

export default LogIn;