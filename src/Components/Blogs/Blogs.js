import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div >
            <h1 className='QA'>Question Answer</h1>
            <div className='box-container'>
            <div className="box">
                <h3>Difference between authorization and authentication</h3>
                <p>
                    Simply expressed, authentication is the process of confirming a person's identity, whereas authorization is the process of confirming a user's access to specific apps, files, and data. The scenario is similar to that of an airline deciding which passengers are allowed to board. The first stage is to verify a passenger's identity to ensure that they are who they claim they are. After determining a customer's identity, the next stage is to confirm any unique services the passenger has access to, such as flying first-class or entering the VIP lounge.
                    Authentication and authorisation serve the same purpose in the digital age. Authentication is a technique for ensuring that people are who they say they are.
                </p>
            </div>
            <div className="box">
                <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>
                To authenticate users to your project, Firebase Authentication delivers backend services, easy-to-use SDKs, and ready-to-use UI frameworks. It accepts passwords, phone numbers, and prominent federated identity providers like Google, Facebook, and Twitter, among other methods.
                <br />
                Firebase Authentication is strongly connected with other Firebase services and uses industry standards like as OAuth 2.0 and OpenID Connect to make it simple to integrate with your custom backend.
                </p>
            </div>
            <div className="box">
                <h3> What other services does firebase provide other than authentication?</h3>
                <p>
                To authenticate users to your project, Firebase Authentication delivers backend services, easy-to-use SDKs, and ready-to-use UI frameworks. It accepts passwords, phone numbers, and prominent federated identity providers like Google, Facebook, and Twitter, among other methods.
                <br />
                Firebase Authentication is strongly connected with other Firebase services and uses industry standards like as OAuth 2.0 and OpenID Connect to make it simple to integrate with your custom backend.
                </p>
            </div>
            </div>
            
        </div>
    );
};

export default Blogs;