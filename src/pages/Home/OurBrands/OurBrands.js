import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Brand from '../Brand/Brand';

const OurBrands = () => {
    return (
        <section className="Products py-5">
            <Container>
                <h2 className='title'>Our Brands</h2>
                <Row gap={3}>
                    <Col sm={6} md={4} lg={3}>
                        <Brand />
                    </Col>
                    <Col sm={6} md={4} lg={3}>
                        <Brand />
                    </Col>
                    <Col sm={6} md={4} lg={3}>
                        <Brand />
                    </Col>
                    <Col sm={6} md={4} lg={3}>
                        <Brand />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default OurBrands;