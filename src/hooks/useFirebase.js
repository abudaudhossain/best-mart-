import axios from "axios";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import firebaseInitialize from "../firebase/firebase.initialize";

firebaseInitialize();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const authProvider = new GoogleAuthProvider();

    const auth = getAuth();
    //google sine In Function
    const googleSineIn = () => {
        signInWithPopup(auth, authProvider)
            .then((result) => {
                // The signed-in user info.
                const newUser = {
                    email: result.user.email,
                    displayName: result.user.displayName,
                    roll: 4,
                    status: "active",
                    addDate: new Date().toLocaleDateString()
                };
                isAddUser(result.user.email, newUser);
                setUser(result.user);
                setError("");
                // ...
            }).catch((error) => {
                // Handle Errors here.
                setError(error.message)

            });
    }

    // Get the currently signed-in user
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setError("");
            } else {
                setUser(user);
            }
        });
    }, []);
    //=========================================
    //====== create new user account =========//
    //======================================
    const createNewUser = (userInfo) => {
        createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
            .then((userCredential) => {
                // Signed in 
                const newUser = {
                    email: userInfo.email,
                    displayName: userInfo.name,
                    roll: 4,
                    status: "active",
                    addDate: new Date().toLocaleDateString()
                };

                setUser(newUser)
                setError("");

                addNewUserToDB(newUser);
                updateProfile(auth.currentUser, {
                    displayName: userInfo.name
                }).then(() => {
                    // Profile updated!
                    setError("");
                    // ...
                }).catch((error) => {
                    // An error occurred
                    setError(error.message);
                    // ...
                });
                // ...
            })
            .catch((error) => {
                setError(error.message);
                // ..
            });
    }

    //======================================//
    //====== Login by email and Password ===//
    //=====================================//
    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setUser(userCredential.user);
                // ...
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    //======================================//
    // == ====== add New user DB ======= ==//
    //=====================================//
    const addNewUserToDB = (newUser) => {
        axios.post('https://bestmart.herokuapp.com/addUser', newUser)
            .then(function (response) {
                // console.log(response);
            })
            .catch(function (error) {
                // console.log(error);
            });
    }

    //check user in database
    const isAddUser = (email, addUser) => {
        fetch(`https://bestmart.herokuapp.com/user/${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.length === 0) {
                    // console.log(data)
                    addNewUserToDB(addUser)
                    // console.log(addUser); 

                }
            })
    }
    // logout method
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
            setError("");
        }).catch((error) => {
            setError(error.message)
        });
    }

    return {
        googleSineIn,
        user,
        logOut,
        createNewUser,
        error,
        loginUser
    };
};

export default useFirebase;