import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
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
            <Navigation />
            <Banner></Banner>
            <SubBanner />
            <Products />
            <OfferBanner />
            <Categories />
            <Products />
            <OurBrands />
            <Recommended />
            <Subscribe />
            <Footer />
        </div>
    );
};

export default Home;