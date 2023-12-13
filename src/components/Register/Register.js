import './Register.css'
import Validation from './regValidation';
import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";
import { useState } from 'react';

export default function Register({
    onRegisterSubmit
}) {
    //const { onRegisterSubmit } = useAuthContext()//useContext(AuthContext);
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        repass: '',
    });


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
          // Proceed with form submission logic
          onRegisterSubmit(values)
          console.log('Form submitted:', values);
       } else {
          console.log('Form validation failed');
       }
    };
    return (
        <div className="contact_section layout_padding">
            <div className="container">
                <div className="contact_main">
                    <h1 className="request_text">Register</h1>
                    <form method="POST" onSubmit={onSubmit}>
                        <div className="form-group">
                            <input
                                type="username"
                                className="email-bt"
                                placeholder="Username"
                                name="username"
                                value={values.username}
                                onChange={changeHandler}
                            />
                        {errors.username && <p style={{color:"red"}}>{errors.username}</p>}

                        </div>
                        <div className="form-group">
                            <input
                                type="text"
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
                        <div className="form-group">
                            <input
                                type="password"
                                className="email-bt"
                                placeholder="Repeat Password"
                                name="repass"
                                value={values.repass}
                                onChange={changeHandler}
                            />
                        {errors.repass && <p style={{color:"red"}}>{errors.repass}</p>}

                        </div>
                        <p className="field">
                            <span>If you have profile click <Link to="/login" className='here'>here</Link></span>
                        </p>
                        <div className="container_send">
                            <input className="send_btn" type="submit" value="Register" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}