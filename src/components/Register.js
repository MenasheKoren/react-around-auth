import { Link } from 'react-router-dom';
import React from 'react';

export default function Register() {
  return (
    <section className={`entry entry_type_signup`}>
      <h2 className='entry__title'>Sign up</h2>
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
          className='entry__save button button_hover_darker'
          type='submit'
        >
          Sign up
        </button>
      </form>
      <Link to='/signin' className='link entry__redirect'>
        Already a member? Log in here!
      </Link>
    </section>
  );
}
