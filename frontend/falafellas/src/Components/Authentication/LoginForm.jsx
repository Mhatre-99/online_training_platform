// LoginForm.js
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Login.css';
import email_image from '../../assets/User/email.png';
import password_image from '../../assets/User/password.png';
import { loginUserService } from '../../UserService';

function LoginForm() {
  const [currentPage, setCurrentPage] = useState("login");
  const handleSignupButton = () =>{
    setCurrentPage("signup");
    //Navigate("/signup");
  };

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleLoginButtonClick = async () => {
    try {
      // Call the loginUserService method
      await loginUserService(user);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className='login-container'>
      <div className="login-header">
        <div className="text">
          Login
        </div>
        <div className="underline"></div>
        <div className="inputs">
          <div className="input">
            <img src={email_image} alt='' />
            <input type='email' name = "email" placeholder='Email id' onChange={handleChange} />
          </div>
          <div className="input">
            <img src={password_image} alt='' />
            <input type='password' name="password" placeholder='Password' onChange={handleChange} />
          </div>
        </div>
        <div className="forgot-password">
          Forgot Password ? <span>Click here</span>
        </div>
        <div className="submit-container">
          <div className={currentPage==="login"? "current-button":"submit"} onClick={handleLoginButtonClick}>
            Login
          </div>
          <div className="submit" onClick={handleSignupButton}>
            <Link to="/signup" style={{ textDecoration: 'none' }}><button className="submit">Sign Up</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
