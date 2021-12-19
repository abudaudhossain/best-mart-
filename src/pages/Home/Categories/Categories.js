import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Category from '../Category/Category';

const Categories = () => {
    return (
        <section className="categories my-5">
            <h3 className="text-center">Shop by Categories</h3>
            <Container>
                <Row>
                    <Col md={3} lg={2} sm={6}>
                        <Category/>
                    </Col>
                    <Col md={3} lg={2} sm={6}>
                        <Category/>
                    </Col>
                    <Col md={3} lg={2} sm={6}>
                        <Category/>
                    </Col>
                    <Col md={3} lg={2} sm={6}>
                        <Category/>
                    </Col>
                    <Col md={3} lg={2} sm={6}>
                        <Category/>
                    </Col>
                    <Col md={3} lg={2} sm={6}>
                        <Category/>
                    </Col>
                   
                </Row>
            </Container>
        </section>
    );
};

export default Categories;