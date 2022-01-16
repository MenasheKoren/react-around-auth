import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../utils/useAuth';
import logo from '../images/logo.svg';

export default function Header() {
  const { authed, logout } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate('/signin');
  };
  return (
    <header className='header'>
      <img src={logo} alt='Around the U.S. logo' className='header__logo' />
      <Link className='link' to='/'>
        Home
      </Link>
      {/*<button onClick={handleLogout}>Logout</button>*/}
      {authed && (
        <Link to='signin' onClick={handleLogout} className='link'>
          Log out
        </Link>
        // <button onClick={handleLogout}>
        //   Logout
        // </button>
      )}
      {!authed && (
        <Link className='link' to='signin'>
          Sign in
        </Link>
      )}
    </header>
  );
}

/* return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="signup">Signup</Link>
        </li>
      </ul>
      {authed && <button onClick={handleLogout}>Logout</button>}
    </nav>
  );
}*/

// if (!loggedIn && !authed) {
//   return (
//     <header className='header'>
//       {/*<Navigate to="/signup" />*/}
//       <img src={logo} alt='Around the U.S. logo' className='header__logo' />
//       <Link to='/signin' className='link'>Sign-up</Link>
//
//       {/*<br/>*/}
//       {/*<Link to='/'>Home</Link> | <Link to='/signup'>Sign-up</Link> |{' '}*/}
//       {/*<Link to='/signin'>Sign-in</Link>*/}
//     </header>
//   );
// } else if (!loggedIn && authed) {
//   return (
//     <header className='header'>
//       {/*<Navigate to="/signin" />*/}
//       <img src={logo} alt='Around the U.S. logo' className='header__logo' />
//       <Link to='/signin' className='link'>Sign-in</Link>
//       {/*<br/>*/}
//       {/*<Link to='/'>Home</Link> | <Link to='/signup'>Sign-up</Link> |{' '}*/}
//       {/*<Link to='/signin'>Sign-in</Link>*/}
//     </header>
//   );
// } else {
//   return (
//     <header className='header'>
//       {/*<Navigate to="/" />*/}
//       <img src={logo} alt='Around the U.S. logo' className='header__logo' />
//
//       <Link to='/signin' className='link'>Log out</Link>
//     </header>
//   );
// }
// }
