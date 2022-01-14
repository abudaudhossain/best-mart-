import React from 'react';

const OrderCard = ({product}) => {
    return (
        <div className="thumb-wrapper my-3">           
                <span className="wish-icon"><i className="fa fa-heart-o"></i></span>
                <div className="img-box">
                    <img src={product.img} className="img-fluid" alt="Macbook" />
                </div>
                <div className="thumb-content">
                    <h4 title={product.name}>{product.name?.slice(0, 30)}...</h4>
                    <p className="item-price"><strike>${product.priceFraction}</strike> <span>${product.price}</span></p>
                </div>          
        </div>
    );
};

export default OrderCard;