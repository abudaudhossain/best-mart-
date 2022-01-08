import React from 'react';
import useAuth from '../../../hooks/useAuth';
// import useFirebase from '../../../hooks/useFirebase';

const LogIn = () => {
    // const {googleSineIn,user} = useFirebase();
    const {googleSineIn, user} = useAuth().firebaseInfo;
    // console.log(googleSineIn);
    const handleLogIn = () =>{
        googleSineIn();
    }
    console.log(user)
    return (
        <div>
            <button onClick={() =>handleLogIn ()} className="btn btn-primary">Google SineIn</button>
        </div>
    );
};

export default LogIn;