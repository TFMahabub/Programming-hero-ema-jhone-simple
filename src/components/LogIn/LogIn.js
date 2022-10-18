import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import './login.css'

const LogIn = () => {

  const {logInUser, setLoading} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation()
  let from = location.state?.from?.pathname || "/";


  const handleOnSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    //lognIn user-
    setLoading(true)
    logInUser(email, password)
    .then(result => {
      console.log(result.user);
      form.reset()
      navigate(from, { replace: true })
    })
  }



  return (
    <div className='fullpage-container'>
      <div className="login-container">
        <h2>Log In</h2>

         <form action="" onSubmit={handleOnSubmit}>
          <div className="email-container">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" required />
          </div>
          <div className="password-container">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" required />
          </div>
          <button type='submit'>Log In</button>
         </form>

        <p className='create-account'>New to Ema-john? <Link to={'/signup'}>Create New Account</Link></p>
        <p className='or'>-------------------- or ---------------------</p>
        <button>Log In with Google</button>
      </div>
    </div>
  );
};

export default LogIn;