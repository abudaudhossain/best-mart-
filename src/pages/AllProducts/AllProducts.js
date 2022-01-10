import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Product from '../Shared/Product/Product';

const AllProducts = () => {
    const { products} = useAuth().ProductsInfo;
  // const products = getData.products;

  if (products.length < 1) {
    // console.log(products);
    return <h2>loading...</h2>
  }
  

    return (
        <section className="Products py-5">
        <Container>
            <h2 className='title'>Our All Products</h2>
            <Row gap={3}>

                {
                    products?.map(product => <Col sm={6} md={4} lg={3}

                        key={product._id}>
                        < Product product={product} name={product.name} />
                    </Col>)
                }

            </Row>
        </Container>
    </section>
    );
};

export default AllProducts;