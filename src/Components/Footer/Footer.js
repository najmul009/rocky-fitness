import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <Link to='/'>Home</Link>
                            <li><Link to='/services'>Services</Link></li>
                            <li><Link to='/checkout'>CheckOut</Link></li>
                            <li><Link to='/blogs'>QNA</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><Link to='/about'>Contact</Link></li>
                            <li><Link to='/about'>Email</Link></li>
                            <li><Link to='/about'>Address</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>Rocky Fitness</h3>
                        <p>Experience what I can do for you first hand. Get a free strategy call via phone or video chat, learn how to maximise your workouts and get advice specific to you and your fitness goals. If you choose to work with me, that's great. If not, that's cool too. </p>
                    </div>
                    <div className="col item social">
                        <Link to='/'><i className="icon ion-social-facebook"></i></Link>
                        <Link to='/'><i className="icon ion-social-twitter"></i></Link>
                        <Link to='/'><i className="icon ion-social-snapchat"></i></Link>
                        <Link to='/'><i className="icon ion-social-instagram"></i></Link>
                    </div>
                </div>
                <p className="copyright">Rocky Fitness © 2022</p>
            </div>
        </footer>
    </div>
    );
};

export default Footer;