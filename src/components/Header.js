import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.svg';

export default function Header({ handleLogout, isAuthed, loginEmail }) {
  const location = useLocation();

  return (
    <header className="header">
      <Link to="/" className="link link__hover">
        <img src={logo} alt="Around the U.S. logo" className="header__logo" />
      </Link>

      {isAuthed && (
        <div className="header__user-area">
          <p className="header__email">{loginEmail}</p>
          <Link
            to="/signin"
            onClick={handleLogout}
            replace
            className="link link__hover"
          >
            Log out
          </Link>
        </div>
      )}

      {location.pathname === '/signin' && !isAuthed && (
        <Link className="link link__hover" to="/signup">
          Sign up
        </Link>
      )}
      {location.pathname === '/signup' && !isAuthed && (
        <Link className="link link__hover" to="signin">
          Log in
        </Link>
      )}
    </header>
  );
}
