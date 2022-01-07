import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import OrderSummary from '../../Shared/OrderSummary/OrderSummary';
import Address from '../Address/Address';
// import useAuth from "../../../hooks/useAuth"

const ShippingPage = () => {

    return (
        <>
            <Navigation />
            <section className="shipping-page">
                <Container>
                    <Row>
                        <Col sm={12} md={8}>
                            <div>
                                <h3>Conform Your Information</h3>
                                <Address />
                            </div>
                            <div>
                                <h2>Payment method</h2>
                            </div>
                        </Col>
                        <Col sm={12} md={4}>
                            <OrderSummary />
                            {/* <button to="/shippingPage" className="my-btn m-2">Order</button> */}
                            <Link to="/home" className="my-btn m-2">Continue Shopping</Link>
                        </Col>
                    </Row>
                </Container>`
            </section>
            <Footer />
        </>
    );
};

export default ShippingPage;