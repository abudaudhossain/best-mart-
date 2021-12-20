import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import "./product.css"

const Product = () => {
    const addToCart = () => {
        console.log("add product");

    }
    return (
        <div className="thumb-wrapper my-3">
            <Link to="/productDetails">
                <span className="wish-icon"><i className="fa fa-heart-o"></i></span>
                <div className="img-box">
                    <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599" className="img-fluid" alt="Macbook" />
                </div>
                <div className="thumb-content">
                    <h4>Matchbook Pro</h4>
                    <p className="item-price"><strike>$1099.00</strike> <span>$869.00</span></p>
                    <Rating
                        initialRating={3}
                        readonly
                        
                        fullSymbol={[ <i className="color-gold fas fa-star"></i>]}
                        emptySymbol={[<i className="far fa-star"></i>]}
                       />
                </div>
            </Link>
            <button onClick={addToCart} className="btn btn-primary">Add to Cart</button>
        </div>
    );
};

export default Product;