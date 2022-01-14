import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import OrderCard from '../OrderCard/OrderCard';


const MyOrder = ({ order }) => {


    return (
        <section>
            <Container className="order-card my-5">
                <h3>Your Order Id: {order._id}</h3>
                <h4>Status: {order.status}</h4>
                <h4>Payment Status: {order.paymentStatus}</h4>

                <button className="my-btn m-2">Payment Now</button>
                <button className="my-btn m-2">Cancel Order</button>
                <Row>
                    {
                        order.products.map((product, index) => <Col lg={3} md={5} key={index}>
                           <OrderCard  product={product}/>
                        </Col>)
                    }


                </Row>
            </Container>
        </section>
    );
};

export default MyOrder;