import './Login.css'

import {  useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import { Link } from 'react-router-dom';

export default function Login() {
   // access the data which we gave through context provider
   const { onLoginSubmit } = useAuthContext();
   
   //adding initial values which we want to control
   //giving to the hook handler in the end
   // data which should fill iin in the begining
   // and then we added in the form
   const { values, changeHandler, onSubmit } = useForm({
      email: '',
      password: '',
   }, onLoginSubmit);
   return (
      <div className="contact_section layout_padding">
         <div className="container">
            <div className="contact_main">
               <h1 className="request_text">Login</h1>
               <form method="POST" onSubmit={onSubmit}>
                  <div className="form-group">
                     <input
                        type="email"
                        className="email-bt"
                        placeholder="Email"
                        name="email"
                        value={values.email}
                        onChange={changeHandler}
                     />
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
                  </div>

                  <p class="field">
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