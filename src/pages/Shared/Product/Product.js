import React, { useState } from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import localeDB from '../../../utilities/localeDB';
import "./product.css"
// import useProducts from "../../../hooks/useProducts"


const Product = ({ name, product }) => {

    const { addStorage, getAllProductQuantity, getStorageData } = localeDB();
    const [CartProducts, setCartProducts] = useState(getStorageData())
    const { setAllProductsQuantity } = useAuth();
    if (!product) {
        return <h2>loading</h2>
    }
    // const [name, img, star] = product;

    const addToCart = (id) => {

        addStorage(id);
        setAllProductsQuantity(getAllProductQuantity());
        setCartProducts(getStorageData());

    }

    return (
        <div className="thumb-wrapper my-3">
            <Link to={`/productDetails/${product._id}`}>
                <span className="wish-icon"><i className="fa fa-heart-o"></i></span>
                <div className="img-box">
                    <img src={product.img} className="img-fluid" alt="Macbook" />
                </div>
                <div className="thumb-content">
                    <h4 title={name}>{name?.slice(0, 30)}...</h4>
                    <p className="item-price"><strike>${product.priceFraction}</strike> <span>${product.price}</span></p>
                    <Rating
                        initialRating={product.star}
                        readonly

                        fullSymbol={[<i className="color-gold fas fa-star"></i>]}
                        emptySymbol={[<i className="far fa-star"></i>]}
                    />
                </div>
            </Link>
            {
                Object.keys(CartProducts).includes(product._id) ? <Link to="/cart">

                    <button className="btn btn-primary">go to Cart</button> 
                </Link>
                :
                 <button onClick={() =>addToCart(product._id)} className="btn btn-primary">Add to Cart</button>
            }
        </div>
    );
};

export default Product;