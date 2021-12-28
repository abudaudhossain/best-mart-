import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import localeDB from '../../../utilities/localeDB';
import OrderSummary from '../../Shared/OrderSummary/OrderSummary';
import CartItem from '../CartItem/CartItem';
import useAuth from '../../../hooks/useAuth'

const Cart = () => {
    const { getStorageData } = localeDB();
    const cartProducts = Object.keys(getStorageData());
    const { myOrderProducts, setMyOrderProducts,allProductsQuantity, setTotalOrderQuantity} = useAuth();
    const myProducts = [];





    //Cart item add to Order products
    useEffect(() => {
        setTotalOrderQuantity(allProductsQuantity)
        cartProducts.forEach(async productId => {
            // let product;
            const quantity = await getStorageData()[productId];
            let res = await fetch(`https://bestmart.herokuapp.com/products/${productId}`);
            let data = await res.json();
            const { price } = await data;
            const orderProduct = await {
                productId,
                quantity,
                price,
                totalPrice: price * quantity
            }
            await myProducts.push(orderProduct);
            // console.log(myProducts)
            await setMyOrderProducts(myProducts)


        });

    }, [])
   

    const hc = () => {
        console.log(myOrderProducts);
        sessionStorage.setItem("myOrderProducts", JSON.stringify(myOrderProducts))
    }
    // console.log(op)
    return (
        <section className="cart">
            <Container>
                <Row>
                    <Col sm={12} md={8}>
                        {
                            cartProducts.map(productId => <CartItem key={productId} productId={productId} />)
                        }
                    </Col>
                    <Col sm={12} md={4}>
                        <OrderSummary />
                        <Link to="/shippingPage">

                        <button to="" onClick={hc} className="my-btn m-2">Go to shipping Page</button>
                        </Link>
                        <Link to="/home" className="m-2"><button className="my-btn">Continue Shopping</button></Link>
                    </Col>
                </Row>
            </Container>`
        </section>
    );
};

export default Cart;