import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import './signup.css'








const SIgnUp = () => {

  const {signUpUser} = useContext(AuthContext)

  const handleOnSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm.value;

    if(password !== confirmPassword){
      alert('confirm password should be same!!!')
      return;
    }

    signUpUser(email, password)
    .then(result =>{
      console.log(result.user);
      form.reset();
    })
    .catch(error => console.error(error))
    
  }



  return (
    <div className='fullpage-container'>
      <div className="signup-container">
        <h2>Sign Up</h2>
        {/* ----------form----------- */}
          <form onSubmit={handleOnSubmit} action="">
            <div className="email-container">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" required />
            </div>
            <div className="password-container">
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" required />
            </div>
            <div className="password-container">
              <label htmlFor="confirm">Confirm Password:</label>
              <input type="password" name="confirm" required />
            </div>
            <button type='submit'>Sign Up</button>
          </form>
          {/* -----------form-end----------- */}
        <p className='or'>Already have an account? <Link to="/login">Log In</Link></p>
        <button>Log In with Google</button>
      </div>
    </div>
  );
};

export default SIgnUp;