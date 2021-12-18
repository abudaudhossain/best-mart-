import React from 'react';
import {Container } from 'react-bootstrap';
import "./Banner.css"

const Banner = () => {
    return (
        <section className="Banner">
            <Container>
                <div className="pt-5">
                    <div className="py-5 banner-text">
                        <h1>Welcome <span style={{color:"#10FFDA"}}>Best Mart+</span></h1>
                        <h1>Huge Saving on <br/> UHD Televisions</h1>
                    </div>
                </div>
            </Container>
        </section >
    );
};

export default Banner;