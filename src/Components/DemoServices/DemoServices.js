import React, { useEffect, useState } from 'react';
import DemoCard from '../DemoCard/DemoCard';
import './DemoServices.css'

const DemoServices = () => {
    const [demoService , setDemoService] = useState([])
    useEffect(()=>{
        fetch('demo-service.json')
        .then(res => res.json())
        .then(data => setDemoService(data))
    },[])
    return (
        <div className="demo-services container">
            <div className='text-center demo-heading'>
                <h1>BE A BETTER YOU</h1>
                <h1 id='demo-sub'>PERSONAL TRAINING IN ROCKY FITNESS</h1>
                <p>Whether you want to lose weight, tone up, gain lean muscle or you are happy as you are but would like a healthier lifestyle, RCotterill PT is the right choice for you. Everyone wants to feel comfortable in their own skin, therefore, even if you are working a busy schedule, finding it hard to meet your fitness goals or would like to get fit, RCotterill PT gives you the flexibility to reach your full potential with a variety of different online and individual personal training plans.</p>
            </div>

                <h1 className='text-primary text-center mt-5'>My Sevices</h1>
            <div className="demo-cards">
                {
                    demoService.map(demo=> <DemoCard key={demo.id} data={demo}></DemoCard>)
                }
            </div>
        </div>
    );
};

export default DemoServices;