import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
import useProducts from '../hooks/useProducts';

export const authContext = createContext();
const AuthProvider = ({children}) => {
    const ProductsInfo = useProducts();
    const firebaseInfo = useFirebase();
    return (
        <authContext.Provider value={{ProductsInfo, firebaseInfo}}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;