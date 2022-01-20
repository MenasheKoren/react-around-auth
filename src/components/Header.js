import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.svg';
import { useAuth } from '../utils/auth';
import App from './App';

export default function Header() {
  const location = useLocation();
  const { isAuthed } = useAuth();
  
  const { handleLogout } = App;
  return (
    <header className='header'>
      {/*<img src={logo} alt="Around the U.S. logo" className="header__logo" />*/}
      <Link to='/' className='link'>
        <img src={logo} alt='Around the U.S. logo' className='header__logo' />
      </Link>
      
      {isAuthed && (
        <Link to='signin' onClick={handleLogout} replace className='link'>
          Log out
        </Link>
      )}
      
      {location.pathname === 'signin' && (
        <Link className='link' to='signup'>
          Sign up
        </Link>
      )}
      {location.pathname === 'signup' && (
        <Link className='link' to='signin'>
          Log in
        </Link>
      )}
    </header>
  );
}
