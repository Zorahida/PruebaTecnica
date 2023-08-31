import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const userInitialState = {
    email: "",
    password: "",
};

const Login = ({ loginUser, logError }) => {
   

    const  [form, setForm] = useState(userInitialState);
   

    const submitForm = (ev) => {
        ev.preventDefault();
        console.log("Se han enviado los datos del cliente");
        
        loginUser(form);
        setForm(userInitialState);
    }



  return (
    <div>
    <h1>Log In</h1>
  <form onSubmit={submitForm}>
    <label>Email</label>
    <input 
    type="email" 
    name="email"  
    placeholder="email"
    value={form.email}
    pattern= "^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i"
    required 
    />
    <label>Password</label>
    <input 
    type="password" 
    name="password" 
    placeholder="write your password"
    value={form.password}
    required
    pattern= "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/})}"

    />
    <button type="submit">Log In</button>
    <div>
        {logError ? <p>{logError}</p> : null} 
    </div>
  </form>
  <Link to="/register">Register</Link>
  </div>
  );
}

export default Login