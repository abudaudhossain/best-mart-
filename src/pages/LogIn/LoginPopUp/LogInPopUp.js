import React, { useState } from 'react';
import { Modal, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LogIn from '../LogIn/LogIn';
// import useFirebase from '../../../hooks/useFirebase';

const LogInPopUp = () => {
    // const {googleSineIn,user} = useFirebase();
    const [show, setShow] = useState(false);
   
    // console.log(user)
    // handle modal 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Nav.Link style={{ color: "white", textAlign: "center" }} onClick={handleShow}>
                <i className="far fa-user me-1" style={{ fontSize: "32px", display: "block" }}></i>
            </Nav.Link>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body closeButton>
                    <LogIn />
                    <Link to="/home" >Home</Link>
                </Modal.Body>

            </Modal>
        </>
    );
};

export default LogInPopUp;