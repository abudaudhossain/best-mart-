import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const SubBanner = () => {
    return (
        <Container>
            <Row className="py-5">
                <Col sm={4}>
                    <img className="img-fluid" src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/banner-custom-top-3-2_1024x1024_crop_center.jpg?v=1616147842" alt="subBanner" />
                </Col>
                <Col sm={4}>
                    <img className="img-fluid" src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/banner-custom-top-3-3_1024x1024_crop_center.jpg?v=1616147850" alt="subBanner" />
                </Col>
                <Col sm={4}>
                    <img className="img-fluid" src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/banner-custom-top-3-1_1024x1024_crop_center.jpg?v=1616145108" alt="subBanner" />
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <img className="img-fluid" src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/banner-custom-top-2-1_1024x1024_crop_center.jpg?v=1616150952" alt="" />
                </Col>
                <Col sm={6}>
                    <img className="img-fluid" src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/banner-custom-top-2-2_1024x1024_crop_center.jpg?v=1616150962" alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default SubBanner;