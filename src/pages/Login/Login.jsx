import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const userInitialState = {
  email: "",
  password: "",
};

const Login = ({ loginUser, logError }) => {
  const [form, setForm] = useState(userInitialState);


  const submitForm = (ev) => {
    ev.preventDefault();
    console.log("Se han enviado los datos del cliente");

    setForm(userInitialState);



  };

  return (
    <div>
      <h1>
        <FormattedMessage id="login.title" defaultMessage="Log In" />
      </h1>
      <form onSubmit={submitForm}>
        <label>
          <FormattedMessage id="login.emailLabel" defaultMessage="Email" />
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <label>
          <FormattedMessage id="login.passwordLabel" defaultMessage="Password" />
        </label>
        <input
          type="password"
          name="password"
          value={form.password}
          pattern="^(?=.*[a-zA-Z])(?=.*[!@#$%^&*_=+-]).{8,}$"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button type="submit">
          <FormattedMessage id="login.loginButton" defaultMessage="Log In" />
        </button>
        <div>
          {logError ? <p>{logError}</p> : null}
        </div>
      </form>
      <p>
        <FormattedMessage id="login.or" defaultMessage="Or" />
      </p>
      <Link to="/register">
        <FormattedMessage id="login.registerLink" defaultMessage="Register" />
      </Link>
    </div>
  );
};

export default Login;
