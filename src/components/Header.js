import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';
import logo from '../images/logo.svg';
import { useAuth } from '../utils/useAuth';

export default function Header() {
  const location = useLocation();
  const { isAuthed, logout } = useAuth();
  const navigate = useNavigate();
  const value = useContext(AppContext);

  function handleLogout() {
    logout()
      .then(() => {
        navigate('/signin', { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <header className="header">
      <Link to="/" className="link">
        <img src={logo} alt="Around the U.S. logo" className="header__logo" />
      </Link>

      {isAuthed && (
        <div className="header__user-area">
          <p className="header__email">{value}</p>
          <Link to="/signin" onClick={handleLogout} replace className="link">
            Log out
          </Link>
        </div>
      )}

      {location.pathname === '/signin' && !isAuthed && (
        <Link className="link" to="/signup">
          Sign up
        </Link>
      )}
      {location.pathname === '/signup' && !isAuthed && (
        <Link className="link" to="signin">
          Log in
        </Link>
      )}
    </header>
  );
}
