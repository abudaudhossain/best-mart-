import React from 'react';
import {Form, FormControl } from 'react-bootstrap';
import './subscribe.css'
const Subscribe = () => {
    return (
        <section className="subscription text-center py-5" style={{background:"#F5F5F5"}}>
            <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>   
            <p >Get the latest updates on new products and upcoming sales</p> 
            <form>
                
                <Form className="d-flex mx-auto my-5 w-50 search">
                        <FormControl
                            type="email"
                            placeholder="Subscribe"
                            className="me-2 email-filed"
                            aria-label="Search"
                        />
                        <button className="subscribe">Subscribe</button>
                        
                    </Form>
            </form>
        </section>
    );
};

export default Subscribe;