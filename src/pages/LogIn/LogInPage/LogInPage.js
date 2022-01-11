import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import "./LoginPage.css"

const LogInPage = () => {
    const { googleSineIn} = useAuth().firebaseInfo;
    // console.log(googleSineIn);
    const handleLogIn = () => {
        googleSineIn();
    }
    return (
        <div>
            <div className="mx-auto form-container p-5 my-5">
                <div>
                    <Link to="/">
                    <h3 className="d-flex align-items-center logo-title" style={{ color: "#3a3ff6" }}>
                        <span className="">Best</span>Mart+</h3>
                    </Link>
                </div>
                <Outlet />

                <div>
                    <p>Or Login With</p>
                    <div>
                        <span className="icon-container" onClick={handleLogIn}>SignIn <i className="fab fa-google"></i>oogle</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogInPage;