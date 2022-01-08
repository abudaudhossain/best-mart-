import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import firebaseInitialize from "../firebase/firebase.initialize";

firebaseInitialize();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const authProvider = new GoogleAuthProvider();

    const auth = getAuth();

    const googleSineIn = () =>{
        signInWithPopup(auth, authProvider)
        .then((result) => {
            // The signed-in user info.
            setUser(result.user)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            console.log(error.message)
            
        });
    }
    

    return {
        googleSineIn,
        user
    };
};

export default useFirebase;