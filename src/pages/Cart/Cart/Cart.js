import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';

const Cart = () => {

    return (
        <section className="cart">
            <Container>
                <Row>
                    <Col sm={12} md={8}>
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </Col>
                    <Col sm={12} md={4}>
                        <div className="border my-5">
                            <h4 className="text-center">Order Summary</h4>
                            <div className="d-flex justify-content-around">
                                <h5>Total Order : </h5>
                                <h5>98</h5>
                            </div>
                            <div className="d-flex justify-content-around">
                                <h5>Total Price : </h5>
                                <h5>98</h5>
                            </div>
                            <div className="d-flex justify-content-around">
                                <h5>Shipping Cost : </h5>
                                <h5>98</h5>
                            </div>
                            <div className="d-flex justify-content-around">
                                <h5>Total cost :</h5>
                                <h5>98</h5>
                            </div>
                        </div>
                            <Link to="/order" className="my-btn m-2">CheckOut</Link>
                            <Link to="/home" className="my-btn m-2">Continue Shopping</Link>
                    </Col>
                </Row>
            </Container>`
        </section>
    );
};

export default Cart;