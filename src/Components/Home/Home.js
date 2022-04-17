import React from 'react';
import Banner from '../Banner/Banner';
import DemoServices from '../DemoServices/DemoServices';
import "./Home.css"

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DemoServices></DemoServices>
        </div>
    );
};

export default Home;