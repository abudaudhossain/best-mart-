import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../../Shared/Product/Product';
import "./Products.css"

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(req => req.json())
      .then(data => setProducts(data));
  }, [])
  if(products.length < 1){
    return <h2>loading...</h2>
  }
  console.log(products);
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
              products?.slice(0, 100).map(product =><Product key={product._id} product={product} name={product.name} /> )
            }
          </OwlCarousel>
        </Row>
      </Container>
    </section>
  );
};

export default Products;