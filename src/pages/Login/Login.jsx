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
    placeholder="write your email"
    value={form.email}
    pattern= "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
    onChange={(e) => setForm({ ...form, email: e.target.value })}
    required 
    />
    <label>Password</label>
    <input 
    type="password" 
    name="password" 
    placeholder="write your password"
    value={form.password}
    pattern= "^(?=.*[a-zA-Z])(?=.*[!@#$%^&*_=+-]).{8,}$"
    onChange={(e) => setForm({ ...form, password: e.target.value })}
    required
    />
    <button type="submit">Log In</button>
    <div>
        {logError ? <p>{logError}</p> : null} 
    </div>
  </form>
  <p>Or</p>
  <Link to="/register">Register</Link>
  </div>
  );
}

export default Login