import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as auth from '../utils/auth';
import { useAuth } from '../utils/useAuth';

export default function Register({ handleSubmitInfoToolTip }) {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmitRegister(e) {
    e.preventDefault();
    auth
      .register(email, password)
      .then((result) => {
        console.dir(result);
        if (result.data && result.data._id) {
          login();
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
