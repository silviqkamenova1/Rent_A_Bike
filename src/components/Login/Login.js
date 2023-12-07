import './Login.css'

import {  AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import Validation from './loginValidation';

export default function Login() {
   // access the data which we gave through context provider
   const { onLoginSubmit } = useContext(AuthContext);
   
   //adding initial values which we want to control
   //giving to the hook handler in the end
   // data which should fill iin in the begining
   // and then we added in the form
   const { values, changeHandler, onSubmit } = useForm({
      email: '',
      password: '',
   }, onLoginSubmit);

   const [formErrors, setformErrors] = useState({});

   function handleValidation(ev){
      ev.preventDefault();
      setformErrors(Validation(values))
   }

   const handelSubmit = (ev) => {
      ev.preventDefault()
      onSubmit(ev);
      handleValidation(ev);
   }
   return (
      <div className="contact_section layout_padding">
         <div className="container">
            <div className="contact_main">
               <h1 className="request_text">Login</h1>
               <form method="POST" onSubmit={handelSubmit} >
                  <div className="form-group">
                     <input
                        type="email"
                        className="email-bt"
                        placeholder="Email"
                        name="email"
                        value={values.email}
                        onChange={changeHandler}
                     />
                     {formErrors.email && <p style={{color:"red"}}>{formErrors.email}</p>}
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
                        {formErrors.password && <p style={{color:"red"}}>{formErrors.password}</p>}
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