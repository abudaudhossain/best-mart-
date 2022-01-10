import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../../Shared/Product/Product';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import useAuth from '../../../hooks/useAuth';
const Recommended = () => {
    const { products} = useAuth().ProductsInfo;
  // const products = getData.products;

  if (products.length < 1) {
    // console.log(products);
    return <h2>loading...</h2>
  }
    return (
        <section className="Products py-5">
            <Container>
                <h3 className='title'>Recommended For You</h3>

                <Row>
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
                                items: 3,

                            },
                            600: {
                                items: 4,

                            },
                            1000: {
                                items: 6,


                            }
                        }}
                    >
                        {
                           products?.slice(70, 90).map(product =><Product product={product} />) 
                        }
                    </OwlCarousel>


                </Row>

            </Container>
        </section>
    );
};

export default Recommended;