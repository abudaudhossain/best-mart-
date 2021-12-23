import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import localeDB from '../../../utilities/localeDB';
import OrderSummary from '../../Shared/OrderSummary/OrderSummary';
import CartItem from '../CartItem/CartItem';
import useAuth from '../../../hooks/useAuth'

const Cart = () => {
    const { getStorageData } = localeDB();
    const cartProducts = Object.keys(getStorageData());
    const { myOrderProducts, setMyOrderProducts } = useAuth();
    // const [op, sop] = useState([]);
    // const [product, setProduct] = useState([]);
    const myProducts = [];





    //Cart item add to Order products
    useEffect(() => {

        cartProducts.forEach(async productId => {
            // let product;
            const quantity = await getStorageData()[productId];
            let res = await fetch(`http://localhost:5000/products/${productId}`);
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
                            cartProducts.map(productId => <CartItem key={productId} productId={productId} setMyOrderProducts={setMyOrderProducts} myProducts={myProducts} cartProducts={cartProducts} />)
                        }
                    </Col>
                    <Col sm={12} md={4}>
                        <OrderSummary />
                        <Link to="/shippingPage">

                        <button to="" onClick={hc} className="my-btn m-2">Go to shipping Page</button>
                        </Link>
                        <Link to="/home" className="my-btn m-2">Continue Shopping</Link>
                    </Col>
                </Row>
            </Container>`
        </section>
    );
};

export default Cart;