import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css'
const Services = () => {
    return (
        <div className='container'>
            <div className="service">
                <img src="https://www.markpersonaltraining.com/uploads/1/1/7/4/117401611/one-to-one_orig.png" alt="" />
                <div className="service-data">
                    <h1>ONE TO ONE COACHING</h1>
                    <h4>FROM $192/MONTH</h4>
                    <p>A one to one health and lifestyle overhaul for people who need the extra accountability and guidance to reach their goals.</p>
                    <Link to='/checkout'>
                       <button className="btn btn-primary ">
                           CheckOut
                       </button>
                    </Link>
                </div>
            </div>
            <div className="service ms-auto">
                <div className="service-data">
                    <h1>NUTRITION COACHING</h1>
                    <h4>FROM $212/MONTH</h4>
                    <p>Get a handle on your nutrition once and for all with extensive nutrition and habit coaching to ensure you stay on track.</p>
                    <Link to='/checkout'>
                       <button className="btn btn-primary ">
                           CheckOut
                       </button>
                    </Link>
                </div>
                <img src="https://www.markpersonaltraining.com/uploads/1/1/7/4/117401611/depositphotos-162008242-original_1.jpg" alt="" />
            </div>
            <div className="service">
                <img src="https://www.markpersonaltraining.com/uploads/1/1/7/4/117401611/editor/front-cover-mindset-for-health_11.jpg?1587655497" alt="" />
                <div className="service-data">
                    <h1>MINDSET COURSE</h1>
                    <h4>FROM $269/MONTH</h4>
                    <p>Transform your mindset in as little as 5 weeks - Set meaningful goals, change your habits, gain willpower and boost motivation.</p>
                    <Link to='/checkout'>
                       <button className="btn btn-primary ">
                           CheckOut
                       </button>
                    </Link>
                </div>
            </div>
            <div className="service ms-auto">
                <div className="service-data">
                    <h1>3D BODY SCANNING</h1>
                    <h4>FROM $392/MONTH</h4>
                    <p>A FIT3D scan is a great way to know your starting point & track your progress over time, whether it's weight loss, building muscle, improving your posture or increasing fitness. </p>
                    <Link to='/checkout'>
                       <button className="btn btn-primary ">
                           CheckOut
                       </button>
                    </Link>
                </div>
                <img src="https://www.markpersonaltraining.com/uploads/1/1/7/4/117401611/published/5.jpg?1644478294" alt="" />
            </div>
        </div>
    );
};

export default Services;