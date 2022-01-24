import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as auth from '../utils/auth';
import { useAuth } from '../utils/useAuth';

export default function Register({
  handleSubmitInfoToolTip,
  handleSetRegistration,
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { tokenCheck } = useAuth();

  tokenCheck();

  function handleEmailChange(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    e.preventDefault();
    setPassword(e.target.value);
  }

  function handleSubmitRegister(e) {
    e.preventDefault();
    auth
      .register(email, password)
      .then((result) => {
        if (result.data && result.data._id) {
          handleSetRegistration();
          handleSubmitInfoToolTip();
        } else {
          handleSubmitInfoToolTip();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <section className={`entry entry_type_signup`}>
      <h2 className="entry__title">Sign up</h2>
      <form className="entry__form">
        <input
          type="email"
          className="field-input field-input_type_entry"
          placeholder="Email"
          id="email-input"
          name="email"
          value={email}
          onChange={handleEmailChange}
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
          onChange={handlePasswordChange}
          required
          minLength="2"
          maxLength="40"
          pattern=".*\S.*"
        />
        <span className="error-message" id="password-input-error" />
        <button
          className="entry__save button button_hover_darker"
          type="submit"
          onClick={handleSubmitRegister}
        >
          Sign up
        </button>
      </form>
      <Link to="/signin" className="link entry__redirect">
        Already a member? Log in here!
      </Link>
    </section>
  );
}
