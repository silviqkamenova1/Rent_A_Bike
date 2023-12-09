import './Register.css'
import Validation from './regValidation';
import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";
import { useState } from 'react';

export default function Register({
    onRegisterSubmit
}) {
    //const { onRegisterSubmit } = useAuthContext()//useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        username: '',
        email: '',
        password: '',
        repass: '',
    }, onRegisterSubmit);
    //add onRegisterSubmit like hendler just to use in the form
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
                    <h1 className="request_text">Register</h1>
                    <form action="/action_page.php" method="POST" onSubmit={handelSubmit}>
                        <div className="form-group">
                            <input
                                type="username"
                                className="email-bt"
                                placeholder="Username"
                                name="username"
                                value={values.username}
                                onChange={changeHandler}
                            />
                        {formErrors.username && <p style={{color:"red"}}>{formErrors.username}</p>}

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
                        <div className="form-group">
                            <input
                                type="password"
                                className="email-bt"
                                placeholder="Repeat Password"
                                name="repass"
                                value={values.repass}
                                onChange={changeHandler}
                            />
                        {formErrors.repass && <p style={{color:"red"}}>{formErrors.repass}</p>}

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