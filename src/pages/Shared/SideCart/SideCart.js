import React from 'react';
import { useState } from 'react';
import { Col, Nav, Offcanvas, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import localeDB from '../../../utilities/localeDB';
import CartItem from '../../Cart/CartItem/CartItem';

const SideCart = () => {
    const { getStorageData } = localeDB();
    const cartProducts = Object.keys(getStorageData());
    const [show, setShow] = useState(false);
    const { allProductsQuantity } = useAuth().ProductsInfo;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Nav.Link style={{ color: "white", textAlign: "center" }} className="position-relative" onClick={handleShow}>
                <i className="fas fa-shopping-cart" style={{ fontSize: "32px", display: "block" }}></i> <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">{allProductsQuantity}</span>
            </Nav.Link>


            <Offcanvas placement="end" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>My Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Row>
                        <Col sm={12}>
                            {
                                cartProducts.map(productId => <CartItem key={productId} productId={productId} />)
                            }
                        </Col>
                    </Row>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default SideCart;