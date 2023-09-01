import React from 'react';
import { useForm } from "react-hook-form";
import { FormattedMessage } from "react-intl";
import "./Register.css"

export const RegisterForm = () => {
    const { register, handleSubmit } = useForm();
    
    const onSubmit = (formData) => {
        console.log(formData);
    }
    
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <FormattedMessage id="register.usernameLabel" defaultMessage="Username" />
        </label>
        <input type="text" name="name" {...register('name', { required: true })}/>
        <label>
          <FormattedMessage id="register.emailLabel" defaultMessage="Email" />
        </label>
        <input type="email" name="email" {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}/>
        <label>
          <FormattedMessage id="register.passwordLabel" defaultMessage="Password" />
        </label>
        <input type="password" name="password" {...register('password', { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/ })}/>
        <button>
          <FormattedMessage id="register.registerButton" defaultMessage="Register" />
        </button>
      </form>
    );
}
