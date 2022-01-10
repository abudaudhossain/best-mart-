import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Brand from '../Brand/Brand';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const brands = [
    "https://cdn.shopify.com/s/files/1/0064/4435/1539/files/brands-custom-2_250x.png?v=1620276129",
    "https://cdn.shopify.com/s/files/1/0064/4435/1539/files/brands-custom-5_250x.png?v=1620276169",
    "https://cdn.shopify.com/s/files/1/0064/4435/1539/files/brands-custom-3_250x.png?v=1620276140",
    "https://cdn.shopify.com/s/files/1/0064/4435/1539/files/brands-custom-4_250x.png?v=1620276160"
]

const OurBrands = () => {
    return (
        <section className="categories my-5">
            <h3 className="text-center">Our All Brands</h3>
            <Container>
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
                            brands?.map(brand => <Brand key={brand}  brand={brand} />)
                        }
                    </OwlCarousel>


                </Row>
            </Container>
        </section>
    );
};

export default OurBrands;