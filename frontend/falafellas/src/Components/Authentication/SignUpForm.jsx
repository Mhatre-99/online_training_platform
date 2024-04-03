// SignUpForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import email_image from '../../assets/User/email.png';
import password_image from '../../assets/User/password.png';
import { registerUserService } from '../../UserService'; 

function SignUpForm() {
  const [currentPage, setCurrentPage] = useState("signup");
  const handleLoginButton = () =>{
    setCurrentPage("login");
  };

  const [user, setUser] = useState({
    name: '',
    email: '',
    phone_number: '',
    designation: '',
    roles: '',
    password: '',
    birth_date: '',
    rewards_earned: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSignUpButtonClick = async () => {
    try {
      // Call the registerUserService method
      await registerUserService(user);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className='login-container'>
      <div className="login-header">
        <div className="text">
          Sign Up
        </div>
        <div className="underline"></div>
        <div className="inputs">
          <div className="input">
            <img src="" alt='' />
            <input type='text' name='name' placeholder="Name" onChange={handleChange} />
          </div>
          <div className="input">
            <img src={email_image} alt='' />
            <input type='email' name='email' placeholder="Email" onChange={handleChange} />
          </div>
          <div className="input">
            <img src={email_image} alt='' />
            <input type='number' name='phone_number' placeholder="Phone Number" onChange={handleChange}/>
          </div>
            <div className="input input-half">
              <img src={email_image} alt='' />
              <input type='text' name='designation' placeholder="Designation" onChange={handleChange}/>
            </div>
            <div className="input input-half">
              <img src={email_image} alt='' />
              <input type='text' name='roles' placeholder="Roles" onChange={handleChange}/>
            </div>
          <div className="input">
            <img src={password_image} alt='' />
            <input type='password' name='password' placeholder="Password" onChange={handleChange}/>
          </div>
          <div className="input">
            <img src={email_image} alt='' />
            <input type='date' name='birth_date' placeholder="Birth Date" onChange={handleChange}/>
          </div>
        </div>
        <div className="forgot-password">
          Existing User ? <span>Login</span>
        </div>
        <div className="submit-container">
          <div className={currentPage==="signup"? "current-button":"submit"} onClick={handleSignUpButtonClick}>
            Sign Up
          </div>
          <div onClick={handleLoginButton}>
            <Link to="/login" style={{ textDecoration: 'none' }}><button className="submit">Login</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;

//name, email, phone_number, designation, roles, password, birth_date,
