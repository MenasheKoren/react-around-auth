import logo from '../images/logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='header'>
      <img src={logo} alt='Around the U.S. logo' className='header__logo' />
      <Link to='/'>Home</Link> | <Link to='/signup'>Sign-up</Link> |{' '}
      <Link to='/signin'>Sign-in</Link>
    </header>
  );
}
