import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import localeDB from '../../utilities/localeDB';
import MyImgMagnifier from './MyImgMagnifier/MyImgMagnifier';
import "./ProductDetails.css";

const ProductDetails = () => {

    const { id } = useParams();
    const { addStorage, getAllProductQuantity, getStorageData } = localeDB();
    const [CartProducts, setCartProducts] = useState(getStorageData())
    const { setAllProductsQuantity } = useAuth().ProductsInfo;
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        fetch(`https://bestmart.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
        if (CartProducts[id]) {
            setQuantity(CartProducts[id])
        };
    }, [])

    if (!product) {
        return <h2>loading</h2>
    }
    const { img, name, star, price, category } = product;

    const addToCart = (id) => {

        addStorage(id, quantity);
        setAllProductsQuantity(getAllProductQuantity());
        setCartProducts(getStorageData());
        setQuantity(CartProducts[id]);
    }


    const increasesQuantity = () => {
        setQuantity(parseInt(quantity) + 1);

    }
    const decreasesQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    const handleQuantityFled = (e) => {
        setQuantity(parseInt(e.target.value))
    }

    // console.log(product)
    return (
        <>

            <section className="product-details py-5">
                <Container >
                    <Row>
                        <Col sm={12} md={6}>
                            <MyImgMagnifier img={img} />
                        </Col>
                        <Col sm={12} md={6}>
                            <h3>{name}</h3>
                            <div>
                                <Rating
                                    initialRating={star}
                                    readonly
                                    fullSymbol={[<i className="color-gold fas fa-star"></i>]}
                                    emptySymbol={[<i className="far fa-star"></i>]}
                                />
                                <small className="px-2"> Review</small>
                            </div>
                            <p>Vendor: Ella - Halothemes</p>
                            <p>SKU: KJSU-58436</p>
                            <p>Availability: {product.stock} In stock</p>
                            <p>Product Type: {category}</p>
                            <h5>${price}</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum eius, doloremque rem alias odit nulla nobis soluta in eum ea, quos hic, obcaecati corrupti. Doloremque quo corporis dolores nesciunt quia.</p>
                            <div>
                                <p>Quantity:
                                    <input id="quantity" type="number" value={quantity} className='m-2' onChange={handleQuantityFled} />
                                    <button onClick={increasesQuantity} className="my-btn m-2"> + </button>
                                    <button onClick={decreasesQuantity} className="my-btn m-2"> - </button>
                                </p>
                                <Link to="/cart">
                                    <button onClick={() => addToCart(product._id)} className="my-btn">Add to Cart</button>
                                </Link>
                                <Link to="/order" className="m-2">
                                    <button className="my-btn  px-4 ">Buy it Now</button>
                                </Link>
                                <Link to="/home" className=" m-2">
                                    <button className="my-btn ps-4">Shipping Continue</button>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>

        </>
    );
};

export default ProductDetails;