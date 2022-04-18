import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import google from '../../images/google.png'
import auth from '../../firebase.init';

const SocilLogin = () => {
        const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
        const navigate=useNavigate();
        if(user){
            navigate('/home')
        }
        let errorElement;
        if(error){
            errorElement=
              <p>Error: {error.message}</p>
        }
        if (loading) {
            return <p>Loading...</p>;
          }
    return (
        <div>
            <p className='text-danger'>{errorElement}</p>
            <button
                   onClick={()=>signInWithGoogle()} 
                    className=' btn btn-info w-50 d-block mx-auto my-2 mb-5'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                
        </div>
    );
};

export default SocilLogin;