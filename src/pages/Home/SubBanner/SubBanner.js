import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./SubBanner.css"

const SubBanner = () => {
    return (
        <Container>
            <Row className="py-5">
                <Col sm={4} className="my-2">
                    <Link className="sub-banner-item" to="#">
                        <img className="img-fluid" src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/banner-custom-top-3-2_1024x1024_crop_center.jpg?v=1616147842" alt="subBanner" />
                    </Link>
                </Col>
                <Col sm={4} className="my-2">
                    <Link className="sub-banner-item" to="#">
                        <img className="img-fluid" src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/banner-custom-top-3-3_1024x1024_crop_center.jpg?v=1616147850" alt="subBanner" />
                    </Link>
                </Col>
                <Col sm={4} className="my-2">
                    <Link className="sub-banner-item" to="#">
                        <img className="img-fluid" src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/banner-custom-top-3-1_1024x1024_crop_center.jpg?v=1616145108" alt="subBanner" />
                    </Link>
                </Col>



            </Row>
            <Row>
                <Col sm={6} className="my-2">
                    <Link className="sub-banner-item" to="#">
                        <img className="img-fluid" src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/banner-custom-top-2-1_1024x1024_crop_center.jpg?v=1616150952" alt="" />
                    </Link>
                </Col>
                <Col sm={6} className="my-2">
                    <Link className="sub-banner-item" to="#">
                        <img className="img-fluid" src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/banner-custom-top-2-2_1024x1024_crop_center.jpg?v=1616150962" alt="" />
                    </Link>
                </Col>


            </Row>
        </Container>
    );
};

export default SubBanner;