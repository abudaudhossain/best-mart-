import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Product from '../../Shared/Product/Product';
import "./Products.css"
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import useAuth from '../../../hooks/useAuth';



const Products = () => {

  const { products} = useAuth().ProductsInfo;
  // const products = getData.products;

  if (products.length < 1) {
    // console.log(products);
    return <h2>loading...</h2>
  }
  

  return (
    <section className="Products py-5">
      <Container>
        <h2 className='title'>Our Products</h2>
        <Row gap={3}>

          {
            products?.slice(0, 12).map(product => <Col sm={6} md={4} lg={3}

              key={product._id}>
              < Product product={product} name={product.name} />
            </Col>)
          }

        </Row>
      </Container>
    </section>
  );
};

export default Products;