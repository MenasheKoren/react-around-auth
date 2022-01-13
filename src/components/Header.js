import logo from '../images/logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';

const loggedIn = false;
const authed = false;

export default function Header() {
  if (!loggedIn && !authed) {
    return (
      <header className='header'>
        {/*<Navigate to="/signup" />*/}
        <img src={logo} alt='Around the U.S. logo' className='header__logo' />
        <Link to='/signin' className='link'>Sign-up</Link>
        
        {/*<br/>*/}
        {/*<Link to='/'>Home</Link> | <Link to='/signup'>Sign-up</Link> |{' '}*/}
        {/*<Link to='/signin'>Sign-in</Link>*/}
      </header>
    );
  } else if (!loggedIn && authed) {
    return (
      <header className='header'>
        {/*<Navigate to="/signin" />*/}
        <img src={logo} alt='Around the U.S. logo' className='header__logo' />
        <Link to='/signin' className='link'>Sign-in</Link>
        {/*<br/>*/}
        {/*<Link to='/'>Home</Link> | <Link to='/signup'>Sign-up</Link> |{' '}*/}
        {/*<Link to='/signin'>Sign-in</Link>*/}
      </header>
    );
  } else {
    return (
      <header className='header'>
        {/*<Navigate to="/" />*/}
        <img src={logo} alt='Around the U.S. logo' className='header__logo' />
        
        <Link to='/signin' className='link'>Log out</Link>
      </header>
    );
  }
}
