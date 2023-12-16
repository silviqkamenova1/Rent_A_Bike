import './Login.css'

import {  AuthContext } from "../../contexts/AuthContext";
// import { useForm } from "../../hooks/useForm";
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import Validation from './loginValidation';

export default function Login() {
   const { onLoginSubmit } = useContext(AuthContext);
   
   const [values, setValues] = useState({
      email: '',
      password: '',
   }, onLoginSubmit);

   const [errors, setErrors] = useState({});
  
   const changeHandler = (e) => {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });
      setErrors({ ...errors, [name]: '' }); // Clear the error when the input changes
   };
  
   const validateForm = () => {
      const validationErrors = Validation(values);
      setErrors(validationErrors);
      return Object.keys(validationErrors).length === 0;
   };
  
   const onSubmit = (e) => {
      e.preventDefault();
      const isValid = validateForm();
  
      if (isValid) {
         onLoginSubmit(values)
         console.log('Form submitted:', values);
      } else {
         console.log('Form validation failed');
      }
   };
   return (
      <div className="contact_section layout_padding">
         <div className="container">
            <div className="contact_main">
               <h1 className="request_text">Login</h1>
               <form method="POST" onSubmit={onSubmit} >
                  <div className="form-group">
                     <input
                        type="email"
                        className="email-bt"
                        placeholder="Email"
                        name="email"
                        value={values.email}
                        onChange={changeHandler}
                     />
                     {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
                  </div>
                  <div className="form-group">
                     <input
                        type="password"
                        className="email-bt"
                        placeholder="Password"
                        name="password"
                        value={values.password}
                        onChange={changeHandler}
                        />
                        {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
                  </div>

                  <p className="field">
                     <span>If you don't have profile click <Link className='here' to="/register">here</Link></span>
                  </p>
                  <div className="container_send">
                     <input className="send_btn" type="submit" value="Login" />


                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}