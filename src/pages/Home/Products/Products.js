import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../../Shared/Product/Product';
import "./Products.css"

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import useAuth from '../../../hooks/useAuth';



const Products = () => {

  const {products,productCategory} = useAuth();
  // const products = getData.products;

  if (products.length < 1) {
    console.log(products);
    return <h2>loading...</h2>
  }
  console.log(productCategory);

  return (
    <section className="Products py-5">
      <Container>
        <h2 className='title'>Our Products</h2>
        <Row gap={3}>
          <OwlCarousel items={4}
            className="owl-theme d-flex"
            autoplay={true}
            loop={true}
            autoplayTimeout={1500}
            autoplayHoverPause={true}
            margin={8}
            responsiveClass={true}
            dots={false}
            responsive={{
              0: {
                items: 1,

              },
              600: {
                items: 3,

              },
              1000: {
                items: 4,


              }
            }}
          >
            {
              products?.slice(0, 100).map(product => <Product key={product._id} product={product} name={product.name} />)
            }
          </OwlCarousel>
        </Row>
      </Container>
    </section>
  );
};

export default Products;