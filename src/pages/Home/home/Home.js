import React from 'react';
import Banner from '../Banner/Banner';
import BestProducts from '../BestProducts/BestProducts';
import Categories from '../Categories/Categories';
import OfferBanner from '../OfferBanner/OfferBanner';
import OurBrands from '../OurBrands/OurBrands';
import Products from '../Products/Products';
import Recommended from '../Recommended/Recommended';
import SubBanner from '../SubBanner/SubBanner';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <SubBanner />
            <Products />
            <OfferBanner />
            <Categories />
            <BestProducts />
            <OurBrands />
            <Recommended />
            <Subscribe />
            
        </div>
    );
};

export default Home;