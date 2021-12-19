import React, { useState } from 'react';

const CartItem = () => {
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
        <div className="d-flex justify-content-between align-items-center flex-wrap m-3 p-3 border">
            <div className="d-flex align-items-center">
                <div style={{ width: "150px" }}>
                    <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-4.jpg?v=1616831015" alt="product-img" className='img-fluid' />
                </div>
                <div className="mx-3">
                    <h4>product name</h4>
                    <h4>{quantity}
                        <button onClick={increasesQuantity} className="my-btn m-2"> + </button>
                        <button onClick={decreasesQuantity} className="my-btn m-2"> - </button>
                    </h4>
                </div>
            </div>

            <div>
                <h5>Price</h5>
                <h5>$45.00</h5>
            </div>

            <div>
                <h5>Total Price</h5>
                <h5>$359.00</h5>
            </div>
        </div>
    );
};

export default CartItem;