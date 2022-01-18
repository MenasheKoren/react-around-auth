import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo.svg';
import { useAuth } from '../utils/auth';

export default function Header() {
  const { isAuthed, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
      .then(() => {
        navigate('signin');
      });
  };
  return (
    <header className='header'>
      <img src={logo} alt='Around the U.S. logo' className='header__logo' />
    
      {isAuthed && (
        <button onClick={handleLogout} className='button'>
          Log out
        </button>
      )}
      {!isAuthed && (
        <Link className='link' to='signin'>
          Sign in
        </Link>
      )}
    </header>
  );
}
