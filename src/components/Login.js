import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/useAuth";

export default function Login() {
  function handleSubmitLogin(e) {
    e.preventDefault();
    login()
      .then(() => {
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const navigate = useNavigate();

  const { login } = useAuth();

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
          required
        />
        <span className="error-message" id="email-input-error" />
        <input
          type="password"
          className="field-input field-input_type_entry"
          placeholder="Password"
          id="password-input"
          name="password"
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
