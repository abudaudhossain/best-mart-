import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';


const TopNav = () => {
  const {quantity} = useAuth();
  console.log(quantity)
  
   
    return (
        <div>
            <Navbar bg="" expand="lg">
                <Container className='menu-container'>
                    <Navbar.Brand href="#home">
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
                    <Nav className="ms-auto" style={{flexDirection: "row"}}>
                        <Nav.Link style={{ color: "white", textAlign: "center"}}>
                            <i className="far fa-user me-1" style={{fontSize: "32px", display: "block" }}></i> Sine in
                        </Nav.Link>
                        {/* <Navbar.Text>
                    {
                        user.email ?
                            <button onClick={logOut} className="btn mx-3" style={{ background: "#23CB77", color: "#fff" }}>Log Out</button>
                            :
                            <Link to="login">
                                <button className="btn mx-3" style={{ background: "#23CB77", color: "#fff" }}>Login</button>
                            </Link>
                    }

                    Signed in as: <Link to="/login">{user.displayName}</Link>
                </Navbar.Text> */}
                        <Nav.Link style={{ color: "white" , textAlign: "center"}} className="position-relative">
                           <i className="fas fa-shopping-cart" style={{fontSize: "32px", display: "block" }}></i> <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">{quantity}</span>
                        </Nav.Link>
                        
                    </Nav>


                </Container>
            </Navbar>
        </div>
    );
};

export default TopNav;

