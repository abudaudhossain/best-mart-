import React, { useState } from 'react';
import { Button, Modal, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import useFirebase from '../../../hooks/useFirebase';

const LogIn = () => {
    // const {googleSineIn,user} = useFirebase();
    const [show, setShow] = useState(false);
    const { googleSineIn, user, logOut } = useAuth().firebaseInfo;
    // console.log(googleSineIn);
    const handleLogIn = () => {
        googleSineIn();
    }

    const handleLogOut = () => {
        logOut();
    }
    // console.log(user)
    // handle modal 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Nav.Link style={{ color: "white", textAlign: "center" }} onClick={handleShow}>
                <i className="far fa-user me-1" style={{ fontSize: "32px", display: "block" }}></i> Sine in
            </Nav.Link>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Please Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <button onClick={() => handleLogIn()} className="btn btn-primary m-2">Google SineIn</button>
                    <button onClick={() => handleLogOut()} className="btn btn-primary m-2 ">Log out</button>
                    <Link to="/home" >Home</Link>
                </Modal.Body>

            </Modal>
        </>
    );
};

export default LogIn;