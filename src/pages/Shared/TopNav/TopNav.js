import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import LogInPopUp from '../../LogIn/LoginPopUp/LogInPopUp';
import Profile from '../Profile/Profile';
import SideCart from '../SideCart/SideCart';
import "./TopNav.css"


const TopNav = () => {
    // const { allProductsQuantity } = useAuth().ProductsInfo;
    const { user } = useAuth().firebaseInfo;
    // console.log(allProductsQuantity)


    return (
        <div>
            <Navbar bg="" expand="lg">
                <Container className='menu-container'>
                    <Navbar.Brand as={Link} to="/home">
                        <h3 className="d-flex align-items-center logo-title">
                            <span className="">Best</span>Mart+</h3>
                    </Navbar.Brand>
                    <Form className="d-flex m-auto w-50 search">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Nav className="ms-auto" style={{ flexDirection: "row" }}>
                        {
                            user?.email ?
                                <Profile />
                                :
                                <LogInPopUp />
                        }
                        <SideCart />


                    </Nav>


                </Container>
            </Navbar>
        </div>
    );
};

export default TopNav;

