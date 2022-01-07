import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DashBoardSideNav from '../DashBoardSideNav/DashBoardSideNav';

const DashBardTopNav = () => {
    return (
        <Navbar collapseOnSelect style={{ background: "#161880", color: "white" }} expand="lg" variant="dark">
            <Container fluid={true}>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Brand as={Link} to="/home" className="d-none d-lg-block">
                    <h3 className="d-flex align-items-center logo-title">
                        <span className="">Best</span>Mart+</h3>
                </Navbar.Brand>
                <Nav className="ms-auto" style={{ flexDirection: "row" }}>
                    <Nav.Link style={{ color: "white", textAlign: "center" }}>
                        <i className="far fa-user me-1" style={{ fontSize: "32px", display: "block" }}></i> Sine in
                    </Nav.Link>
                </Nav>

                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="start"
                    style={{ background: "#161880"}}
                >
                    <Offcanvas.Header closeButton style={{ color: "white" }}>
                        <Navbar.Brand as={Link} to="/home">
                            <h3 className="d-flex align-items-center logo-title">
                                <span className="">Best</span>Mart+</h3>
                        </Navbar.Brand>
                    </Offcanvas.Header>
                    
                    <Offcanvas.Body>
                        <DashBoardSideNav />
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default DashBardTopNav;