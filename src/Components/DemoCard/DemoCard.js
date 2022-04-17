import React from 'react';
import { Link } from 'react-router-dom';
import './DemoCard.css'

const DemoCard = (props) => {
    const {title,description,img} =props.data;
    return (
        <div className='demo-card'>
            <img src={img} alt="" />
            <h1>{title}</h1>
            <p>{description}</p>
            <Link to='/checkout'>CHECKOUT</Link>
        </div>
    );
};

export default DemoCard;