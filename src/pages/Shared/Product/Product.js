import React from 'react';
import "./product.css"

const Product = () => {
    return (
        <div>
            <div class="thumb-wrapper my-3">
                <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                <div class="img-box">
                    <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599" class="img-fluid" alt="Macbook"/>
                </div>
                <div class="thumb-content">
                    <h4>Matchbook Pro</h4>
                    <p class="item-price"><strike>$1099.00</strike> <span>$869.00</span></p>
                    <div class="star-rating">
                        <ul class="list-inline">
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star-half-o"></i></li>
                        </ul>
                    </div>
                    <a href="#hj" class="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        </div>
    );
};

export default Product;