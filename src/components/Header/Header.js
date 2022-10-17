import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const {user, signOutUser} = useContext(AuthContext);
    // console.log(user.uid);

    const navigate = useNavigate();

    const handleSignOut = () =>{
        signOutUser()
        .then(result => {
            navigate('/login')
        })
        .catch(error => console.error(error))
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                   user?.uid?
                    <button className='sign-out' onClick={handleSignOut}>Sign Out</button>
                   :
                    <>
                     <Link to= "/login">Log In</Link>
                     <Link to= "/signup">SignUp</Link>
                    </>
                    }
            </div>
        </nav>
    );
};

export default Header;