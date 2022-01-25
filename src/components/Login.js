import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as auth from '../utils/auth';
import { useApp } from '../utils/useApp';
import { useAuth } from '../utils/useAuth';

export default function Login({ handleSubmitInfoToolTip }) {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { handleUpdateLoginEmail } = useApp();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleUpdateEmail(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }

  function handleUpdatePassword(e) {
    e.preventDefault();
    setPassword(e.target.value);
  }

  function handleSubmitLogin(e) {
    e.preventDefault();
    if (!email || !password) {
      handleSubmitInfoToolTip();
      return;
    }
    auth
      .authorize(email, password)
      .then((data) => {
        if (data.token) {
          handleUpdateLoginEmail(email);
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
          value={email || ''}
          onChange={handleUpdateEmail}
          required
        />
        <span className="error-message" id="email-input-error" />
        <input
          type="password"
          className="field-input field-input_type_entry"
          placeholder="Password"
          id="password-input"
          name="password"
          value={password || ''}
          onChange={handleUpdatePassword}
          required
          minLength="2"
          maxLength="40"
          pattern=".*\S.*"
        />
        <span className="error-message" id="password-input-error" />
        <button
          onSubmit={handleSubmitLogin}
          className="entry__save button button_hover_dark"
          type="submit"
        >
          Log in
        </button>
      </form>
      <Link to="/signup" className="link link__hover entry__redirect-text">
        Not a member yet? Sign up here!
      </Link>
    </section>
  );
}
