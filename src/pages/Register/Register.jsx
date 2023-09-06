import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { FormattedMessage } from "react-intl";
import "./Register.css";
import { UserReg } from './RegisterUser';

function RegisterForm () {
    const { handleSubmit } = useForm();
    
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


    const onSubmit = (formData) => {
      console.log(formData)
      UserReg.post("users/register", formData).then((res) => {
        console.log(res);
      });
    };
  
    const handleReset = () => {
      setName("");
      setEmail("");
      setPassword("")
    };
    
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <FormattedMessage id="register.usernameLabel" defaultMessage="Username" />
        </label>

        <input type="text" 
        name="name" 
        value={name}
        onChange={(ev) => setName(ev.target.value)}
        required
        placeholder="Write your name here"
        pattern='/^[A-Za-z]+$/i,'
        />
        

        <label>
          <FormattedMessage id="register.emailLabel" defaultMessage="Email" />
        </label>
        <input type="email" 
        name="email" 
        value={email} 
        onChange={(ev) => setEmail(ev.target.value)}
        required
        placeholder= "Write your email here"
        pattern='/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,'
         />

        <label>
          <FormattedMessage id="register.passwordLabel" defaultMessage="Password" />
        </label>
        <input type="password" 
        name="password" 
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
        required
        placeholder= "Write your password"        
        pattern='/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/'
         />

        <button type='submit' onClick={handleReset}>
          <FormattedMessage id="register.registerButton" defaultMessage="Register" />
        </button>
      </form>
    );
}

export default RegisterForm