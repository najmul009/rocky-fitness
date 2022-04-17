import React from 'react';
import { Link } from 'react-router-dom';
import './Review.css'

const Review = () => {
    return (
        <div className='review-container container'>
            <h1>What My Amazing Clients Say</h1>
            <div className="reviews">
                <div className="review-card">
                    <p>"Rocky is great, always there with help and advise which you can trust to talk to. I can now train at home saving time whilst being more efficient."</p>
                    <h2>Lucy Eagles</h2>
                </div>
                <div className="review-card">
                    <p>""Rockys online coaching has helped me feel more comfortable within myself and given me the confidence to eat better foods and train with my goals in mind."</p>
                    <h2>Alison Salkeld-Brown</h2>
                </div>
                <div className="review-card">
                    <p>"During my plan with Rocky, I exceeded even my own expectations by losing 13lb and dropping 2 dress sizes from a size 12 to a size 8!"</p>
                    <h2>Jhon Wick</h2>
                </div>
            </div>
            <div className="link-btn">
            <Link to='/services'>
                <button className='start-btn' >See My All Services</button>
            </Link>
            </div>
            
        </div>
    );
};

export default Review;