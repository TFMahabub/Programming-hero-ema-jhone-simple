import React from 'react';
import { Link } from 'react-router-dom';
import './login.css'

const LogIn = () => {
  return (
    <div className='fullpage-container'>
      <div className="login-container">
        <h2>Log In</h2>
        <div className="email-container">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="password-container">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </div>
        <button>Log In</button>
        <p className='create-account'>New to Ema-john? <Link to={'/signup'}>Create New Account</Link></p>
        <p className='or'>-------------------- or ---------------------</p>
        <button>Log In with Google</button>
      </div>
    </div>
  );
};

export default LogIn;