import React ,{useEffect, useState}from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Product from '../../Shared/Product/Product';
import "./Products.css"

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
      fetch("http://localhost:5000/products")
      .then(req => req.json())
      .then(data => setProducts(data));
    },[])
    console.log(products);
    return (
        <section className="Products py-5">
           <Container>
               <h2 className='title'>Our Products</h2>
               <Row gap={3}>
                   <Col sm={6} md={4} lg={3}>
                     <Product/>
                   </Col>
                   <Col sm={6} md={4} lg={3}>
                     <Product/>
                   </Col>
                   <Col sm={6} md={4} lg={3}>
                     <Product/>
                   </Col>
                   <Col sm={6} md={4} lg={3}>
                     <Product/>
                   </Col>
                   <Col sm={6} md={4} lg={3}>
                     <Product/>
                   </Col>
                   <Col sm={6} md={4} lg={3}>
                     <Product/>
                   </Col>
               </Row>
           </Container>
        </section>
    );
};

export default Products;