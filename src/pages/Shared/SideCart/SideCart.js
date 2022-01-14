import React, { useEffect } from 'react';
import { useState } from 'react';
import { Col, Nav, Offcanvas, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import localeDB from '../../../utilities/localeDB';
import CartItem from '../../Cart/CartItem/CartItem';

const SideCart = () => {
    const [show, setShow] = useState(false);
   
    const { getStorageData } = localeDB();
    const cartProducts = Object.keys(getStorageData());
    const {  setMyOrderProducts, allProductsQuantity, setTotalOrderQuantity } = useAuth().ProductsInfo;
    const myProducts = [];

    //Cart item add to Order products
    useEffect(() => {
        setTotalOrderQuantity(allProductsQuantity)
        cartProducts.forEach(async productId => {
            // let product;
            const quantity = await getStorageData()[productId];
            let res = await fetch(`https://bestmart.herokuapp.com/product/${productId}`);
            let data = await res.json();
            const { price } = await data;
            const orderProduct = await {
                productId,
                quantity,
                price,
                totalPrice: price * quantity
            }
            await myProducts.push(orderProduct);
            // console.log(myProducts)
            await setMyOrderProducts(myProducts)


        });

    }, [])


    

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
                        <Link to="/cart">
                            <button className="my-btn">Cart Details</button>
                        </Link>
                    </Row>
                </Offcanvas.Body>

            </Offcanvas>
        </>
    );
};

export default SideCart;