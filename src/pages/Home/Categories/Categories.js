import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Category from '../Category/Category';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Categories = () => {
    const { productCategory } = useAuth().ProductsInfo;
    const [categories, setCategories] = useState(productCategory)
    useEffect(() => {
        setCategories(productCategory)
    },[productCategory])
    if(categories.length < 1){
        return <h2>Loading...</h2>
    }
    // console.log(productCategory);
    return (
        <section className="categories my-5">
            <h3 className="text-center">Shop by Categories</h3>
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
                items: 6,

              },
              1000: {
                items: 8,


              }
            }}
          >
            {
              categories?.map(category => <Category key={category.categoryName} category={category}/>)
            }
          </OwlCarousel>
                    
                   
                </Row>
            </Container>
        </section>
    );
};

export default Categories;