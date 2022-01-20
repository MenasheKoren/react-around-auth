import { Link } from 'react-router-dom';
import React from 'react';
import App from './App';

export default function Login() {
  const { handleSubmitLogin, handleLoginTest } = App;
  return (
    <section className={`entry entry_type_login`}>
      <h2 className='entry__title'>Log in</h2>
      <form className='entry__form'>
        <input
          type='email'
          className='field-input field-input_type_entry'
          placeholder='Email'
          id='email-input'
          name='email'
          required
        />
        <span className='error-message' id='email-input-error' />
        <input
          type='password'
          className='field-input field-input_type_entry'
          placeholder='Password'
          id='password-input'
          name='password'
          required
        />
        <span className='error-message' id='password-input-error' />
        <button
          onSubmit={handleSubmitLogin}
          className='entry__save button  button_hover_dark'
          type='submit'
        >
          Log in
        </button>
      </form>
      <Link to='/signup' className='link entry__redirect'>
        Not a member yet? Sign up here!
      </Link>
      <button onClick={handleLoginTest}>Test Log in</button>
    </section>
  );
}
