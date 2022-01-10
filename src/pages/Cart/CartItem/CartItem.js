import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import localeDB from '../../../utilities/localeDB';

const CartItem = ({ productId }) => {
    const { getStorageData, getAllProductQuantity, handleDeleteItem } = localeDB();
    const { myOrderProducts, setMyOrderProducts, setTotalOrderQuantity, totalOrderQuantity, setAllProductsQuantity} = useAuth().ProductsInfo;
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(getStorageData()[productId]);
    const orderProducts = [...myOrderProducts];

    //================================================//
    //=====Load product in server by product id=======//
    //=================================================== 
    useEffect(() => {
        fetch(`https://bestmart.herokuapp.com/product/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));

        setMyOrderProducts(orderProducts);
              

    }, [quantity])

    //========================================//
    //===== increases product quantity =======//
    //========================================// 
    const increasesQuantity = () => {
        setQuantity(quantity + 1);
        setTotalOrderQuantity(totalOrderQuantity + 1)
        orderProduct.quantity = quantity;
        console.log(getAllProductQuantity())

    }

    //========================================//
    //===== decrease product quantity =======//
    //========================================// 
    const decreasesQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            setTotalOrderQuantity(totalOrderQuantity - 1)
        }
    }
    //========================================//
    //===== create order product object =======//
    //========================================// 
    if (!product) {
        return <h1>loading</h1>
    }
    const { name, price, img } = product;


    const orderProduct = {
        productId,
        quantity,
        price,
        totalPrice: price * quantity
    }

    const getItem = orderProducts.find(product => product.productId === productId)
    if (!getItem) {
        orderProducts.push(orderProduct);

    } else {

        orderProducts[orderProducts.indexOf(getItem)] = orderProduct;
        // console.log(getItem);

    }

    //========================================//
    //===== handle delete cart item =======//
    //========================================//
    const handleCartItemDelete = (id) =>{
       const remendProducts =  myOrderProducts.filter(product => product.productId !== id);
       setMyOrderProducts(remendProducts);
       handleDeleteItem(id);
       setTotalOrderQuantity(getAllProductQuantity());
       setAllProductsQuantity(getAllProductQuantity());
       
    } 

    return (
        <div className="d-flex justify-content-between align-items-center flex-wrap m-3 p-3 border">
            <div className="d-flex align-items-center">
                <div style={{ width: "150px" }}>
                    <img src={img} alt="product-img" className='img-fluid' />
                </div>
                <div className="mx-3">
                    <h4 title={name}>{name?.slice(0, 25)}</h4>
                    <h4>{quantity}
                        <button onClick={increasesQuantity} className="my-btn m-2"> + </button>
                        <button onClick={decreasesQuantity} className="my-btn m-2"> - </button>
                    </h4>
                </div>
            </div>

            <div>
                <h5>Price</h5>
                <h5>${price}</h5>
            </div>

            <div>
                <h5>Total Price</h5>
                <h5>$ {orderProduct.totalPrice}</h5>
            </div>
            <div>
                <button onClick={() => handleCartItemDelete(productId)} className="my-btn">Delete</button>
            </div>
        </div>
    );
};

export default CartItem; 