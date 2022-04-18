import React from 'react';
import personalPic from '../../images/sifay.png'
import './About.css'

const About = () => {
    return (
        <div className='about-container'>
           <div className='personla-info'>
               <img src={personalPic} alt="" />
               <div>
                   <h3>Najmul Hossain</h3>
                </div>
           </div>
           <div className='informaiton'>
               <p>
                   I Completed B.Sc in CSE from Daffodil International University. In future I will going to abroad for my higher education, that's why i am makig all my preparations. At this same time I am continue in my research activites. Even after all this, I am still continuing my Programming-hero course. I don't know how long I will able to continue like this. In this course i am trying my best to do batter in the future.
               </p>
           </div>
        </div>
    );
};

export default About;