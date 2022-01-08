import React from 'react';
import useAuth from '../../../hooks/useAuth';

const LogOut = () => {
    const {logOut, user} = useAuth().firebaseInfo;
    console.log(user);
    return (
        <div>
            
        </div>
    );
};

export default LogOut;