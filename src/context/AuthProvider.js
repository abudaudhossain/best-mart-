import React, { createContext } from 'react';
import useProducts from '../hooks/useProducts';

export const authContext = createContext();
const AuthProvider = ({children}) => {
    const allContext = useProducts();
    return (
        <authContext.Provider value={allContext}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;