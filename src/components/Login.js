import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as auth from '../utils/auth';
import { useAuth } from '../utils/useAuth';

export default function Login({ handleSubmitInfoToolTip }) {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmitLogin(e) {
    e.preventDefault();
    if (!email || !password) {
      handleSubmitInfoToolTip();
      return;
    }
    auth
      .authorize(email, password)
      .then((data) => {
        if (data.jwt) {
          login();
          navigate('/', { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <section className={`entry entry_type_login`}>
      <h2 className="entry__title">Log in</h2>
      <form className="entry__form">
        <input
          type="email"
          className="field-input field-input_type_entry"
          placeholder="Email"
          id="email-input"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <span className="error-message" id="email-input-error" />
        <input
          type="password"
          className="field-input field-input_type_entry"
          placeholder="Password"
          id="password-input"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <span className="error-message" id="password-input-error" />
        <button
          onClick={handleSubmitLogin}
          className="entry__save button  button_hover_dark"
          type="submit"
        >
          Log in
        </button>
      </form>
      <Link to="/signup" className="link entry__redirect">
        Not a member yet? Sign up here!
      </Link>
    </section>
  );
}
