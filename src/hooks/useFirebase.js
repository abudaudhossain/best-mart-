import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import firebaseInitialize from "../firebase/firebase.initialize";

firebaseInitialize();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const authProvider = new GoogleAuthProvider();

    const auth = getAuth();
    //google sine In Function
    const googleSineIn = () => {
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

    // Get the currently signed-in user
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser(user);
            }
        });
    }, []);

    const logOut = () =>{
        signOut(auth).then(() => {
            setUser({})
          }).catch((error) => {
            console.log(error.message)
          });
    }

    return {
        googleSineIn,
        user,
        logOut
    };
};

export default useFirebase;