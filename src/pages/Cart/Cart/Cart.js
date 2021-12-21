import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OrderSummary from '../../Shared/OrderSummary/OrderSummary';
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
                        <OrderSummary />
                        <Link to="/shippingPage" className="my-btn m-2">Go to shipping Page</Link>
                        <Link to="/home" className="my-btn m-2">Continue Shopping</Link>
                    </Col>
                </Row>
            </Container>`
        </section>
    );
};

export default Cart;