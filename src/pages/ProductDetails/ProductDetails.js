import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import "./ProductDetails.css"

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const increasesQuantity = () => {
        setQuantity(quantity + 1);
    }
    const decreasesQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    return (
        <section className="product-details py-5">
            <Container >
                <Row>
                    <Col sm={12} md={6}>
                        <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-4.jpg?v=1616831015" className='img-thumbnail' alt="product-img" />
                    </Col>
                    <Col sm={12} md={6}>
                        <h3>Product Name</h3>
                        <div>
                            <Rating
                                initialRating={3}
                                readonly

                                fullSymbol={[<i className="color-gold fas fa-star"></i>]}
                                emptySymbol={[<i class="far fa-star"></i>]}
                            />
                            <small className="px-2"> Review</small>
                        </div>
                        <p>Vendor: Ella - Halothemes</p>
                        <p>SKU: KJSU-58436</p>
                        <p>Availability: 10 In stock</p>
                        <p>Product Type:</p>
                        <h5>$89.00</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum eius, doloremque rem alias odit nulla nobis soluta in eum ea, quos hic, obcaecati corrupti. Doloremque quo corporis dolores nesciunt quia.</p>
                        <div>
                            <p>Quantity:
                                <input type="number" value={quantity} className='m-2' />
                                <button onClick={increasesQuantity} className="my-btn m-2"> + </button>
                                <button onClick={decreasesQuantity} className="my-btn m-2"> - </button>
                            </p>
                            <Link to="/cart" className="my-btn m-2 px-4">Add to Cart</Link>
                            <Link to="/order" className="my-btn m-2 px-4">Buy it Now</Link>
                            <Link to="/home" className="my-btn m-2 px-4">Shipping Continue</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ProductDetails;