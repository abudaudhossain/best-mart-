import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user, createNewUser, error} = useAuth().firebaseInfo;
    const onSubmit = data => {
        console.log(data);
        if(data.password === data.rePassword){
            createNewUser(data);
            reset();
        }else{
        console.log("Password error")    
        }
    };

    console.log(user, error)
    return (
        <div>
            <h3>Create an account</h3>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="mb-2">
                    <label htmlFor="exampleInputEmail1" className="form-label">Enter Name</label>
                    <input   {...register("name", { required: true })} type="text" className="form-control"/>
                </div>
                <div className="mb-2">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input   {...register("email", { required: true })} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-2">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input  {...register("password", { required: true })} type="password" className="form-control" id="exampleInputPassword1" />
                    {errors.password && <span>This field is required</span>}
                </div>
                <div className="mb-2">
                    <label htmlFor="RePassword" className="form-label">RePassword</label>
                    <input  {...register("rePassword", { required: true })} type="password" className="form-control" id="exampleInputPassword1" />
                    {errors.rePassword && <span>This field is required</span>}
                </div>


                <button type="submit" className="my-btn w-100 p-2 mb-3 mt-3">Submit</button>
                {/* */}
            </form>
            <p>Already Registered? <Link to="/login">Login Now</Link></p>
           
        </div>
    );
};

export default Register;