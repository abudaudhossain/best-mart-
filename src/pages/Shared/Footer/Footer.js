import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SocialMedia from '../SocialMedia/SocialMedia';

const Footer = () => {
    return (
        <footer style={{ background: "#F5F5F5" }} className="pb-5">
            <Container>
                <Row>
                    <Col ms={12}>
                        <h4 class="text-uppercase fw-bold mb-4">CATEGORIES</h4>
                        <p>Appliances</p>
                        <p>Computers and Laptops</p>
                    </Col>
                    <Col ms={12}>
                        <h4 class="text-uppercase fw-bold mb-4">FURTHER INFO.</h4>
                        <p>About us</p>
                        <p>Gift Certificates</p>
                        <p>Theme Styles</p>
                    </Col>
                    <Col ms={12}>
                        <h4 class="text-uppercase fw-bold mb-4">CUSTOMER SERVICE</h4>
                        <p>Help and FAQs</p>
                        <p>Terms of Conditions</p>
                        <p>Privacy Policy</p>
                    </Col>
                    <Col ms={12}>
                        <div class="mx-auto mb-md-0 mb-4">

                            <h4 class="text-uppercase fw-bold mb-4">
                                Contact
                            </h4>
                            <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
                            <p>
                                <i class="fas fa-envelope me-3"></i>
                                info@example.com
                            </p>
                            <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
                            <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
                            <SocialMedia/>
                        </div>


                    </Col>

                </Row>
            </Container>
        </footer >
    );
};

export default Footer;