import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocilLogin from '../SocilLogin/SocilLogin';
const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    })

    const [signInWithEmail, user, loading, hookError] = useSignInWithEmailAndPassword(auth);

    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, email: "" });
        } else {
            setErrors({ ...errors, email: "Invalid email" });
            setUserInfo({ ...userInfo, email: "" });
        }

    };

    const handlePasswordChange = (e) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Minimum 6 characters!" });
            setUserInfo({ ...userInfo, password: "" });
        }
    };

    const handelLogin = async (e) => {
        e.preventDefault();
        await signInWithEmail(userInfo.email, userInfo.password);
        
    };
    if (user) {
        navigate(from, { replace: true });
    }
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
      );
    const forgetPassword=async ()=>{
        await sendPasswordResetEmail(userInfo.email)
        toast("Reset Email send")

    }
    return (
        <div className='register-form'>
        <h2 style={{ textAlign: 'center' }}>Please Login</h2>
        <form onSubmit={handelLogin}>
           

            <input type="email" name="email" id="" placeholder='Email Address' required onChange={handleEmailChange} />
            {errors?.email && <p className="error-message">{errors.email}</p>}


            <input type="password" name="password" id="" placeholder='Password' required  onChange={handlePasswordChange} />
            {errors?.password && <p className="error-message">{errors.password}</p>}

           


            
            <input
                
                className='w-50 mx-auto btn btn-primary mt-2'
                type="submit"
                value="Login" />
        </form>
        <p>New to Rocky? <Link to="/signup" className='text-primary pe-auto text-decoration-none' >Please SignUp</Link> </p>
        <button className='btn btn-link' onClick={forgetPassword}> Forget Password</button>
        <ToastContainer></ToastContainer>
        <SocilLogin></SocilLogin>
        {/* <SocialLogin></SocialLogin> */}
    </div>
    );
};

export default Login;