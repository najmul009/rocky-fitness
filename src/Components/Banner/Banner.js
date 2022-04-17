import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'
import rockyBg from '../../images/rocky-bg.jpg'

const Banner = () => {
    return (
        <div className='banner'>
           <div className=" head-lines">
               <h1 className='heading-1'>Take Your Fitness</h1>
               <h1>To The Next Level</h1>
               <p>PREMIUM ONLINE & INDIVIDUAL PERSONAL TRAINING IN FAREHAM WITH ROBERT COTTERILL</p>
               <Link to='/services'>
                   <button className='start-btn'>START HERE</button>
               </Link>
           </div>
           <div className="banner-img">
               <img src={rockyBg} alt="" />
           </div>
        </div>
    );
};

export default Banner;