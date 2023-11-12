import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

export default function Register() {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        username: '',
        email: '',
        password: '',
        repass: '',
    }, onRegisterSubmit);
    //add onRegisterSubmit like hendler just to use in the form
    return (
        <div className="contact_section layout_padding">
            <div className="container">
                <div className="contact_main">
                    <h1 className="request_text">Register</h1>
                    <form action="/action_page.php" method="POST" onSubmit={onSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="email-bt"
                                placeholder="Username"
                                name="username"
                                value={values.username}
                                onChange={changeHandler}
                            />
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
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="email-bt"
                                placeholder="Password"
                                name="password"
                                value={values.password}
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="email-bt"
                                placeholder="Repeat Password"
                                name="repass"
                                value={values.repass}
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="container_send">
                            <input className="send_btn" type="submit" value="Register" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}