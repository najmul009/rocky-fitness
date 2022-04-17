import React from 'react';
import Banner from '../Banner/Banner';
import DemoServices from '../DemoServices/DemoServices';
import Review from '../Review/Review';
import "./Home.css"

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DemoServices></DemoServices>
            <Review></Review>
        </div>
    );
};

export default Home;