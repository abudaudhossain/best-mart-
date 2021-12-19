import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col ms={12}>
                        <h3>CATEGORIES</h3>
                        <h4>Appliances</h4>
                        <h4>Computers and Laptops</h4>
                    </Col>
                    <Col ms={12}>
                        <h3>FURTHER INFO.</h3>
                        <h4>About us</h4>
                        <h4>Gift Certificates</h4>
                        <h4>Theme Styles</h4>
                    </Col>
                    <Col ms={12}>
                        <h3>CUSTOMER SERVICE</h3>
                        <h4>Help and FAQs</h4>
                        <h4>Terms of Conditions</h4>
                        <h4>Privacy Policy</h4>
                    </Col>
                    <Col ms={12}></Col>
                    
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;