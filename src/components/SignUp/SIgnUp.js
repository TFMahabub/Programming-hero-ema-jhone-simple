import React from 'react';
import { Link } from 'react-router-dom';
import './signup.css'

const SIgnUp = () => {
  return (
    <div className='fullpage-container'>
      <div className="signup-container">
        <h2>Sign Up</h2>
        <div className="name-container">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" required />
        </div>
        <div className="email-container">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="password-container">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </div>
        <button>Sign Up</button>
        <p className='or'>Already have an account? <Link to="/login">Log In</Link></p>
        <button>Log In with Google</button>
      </div>
    </div>
  );
};

export default SIgnUp;