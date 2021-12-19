import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Product from '../../Shared/Product/Product';

const Recommended = () => {
    return (
        <section className="Products py-5">
            <Container>
                <h2 className='title'>Recommended For You</h2>
                <Row gap={3}>
                    <Col sm={6} md={4} lg={3}>
                        <Product />
                    </Col>
                    <Col sm={6} md={4} lg={3}>
                        <Product />
                    </Col>
                    <Col sm={6} md={4} lg={3}>
                        <Product />
                    </Col>
                    <Col sm={6} md={4} lg={3}>
                        <Product />
                    </Col>
                    
                </Row>
            </Container>
        </section>
    );
};

export default Recommended;