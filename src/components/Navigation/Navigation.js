import "./Navigation.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function Navigation() {
    const { isAuthenticated,userEmail } = useContext(AuthContext);
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="logo"><img alt='' src="assets/images/logo.png" /></Link>
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}

            <div className="collapse navbar-collapse " >
                <ul className="navbar-nav mr-auto ">
                    <li className="nav-item active ">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/catalog">Shop</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/Linkbout">About</Link>
                    </li> */}
                    {isAuthenticated && (
                        <li className="nav-item">
                            <Link className="nav-link" to="/create">Add Bike</Link>
                        </li>
                    )}
                    {/* {!isAuthenticated && (
                        <> */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/news">News</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li> */}
                        {/* </>
                    )} */}
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <div className="login_menu">
                        <ul>
                            {isAuthenticated && (
                                <>
                                    <li className="welcomeBar">Welcome, {userEmail}!</li>
                                    <li><Link  to="/logout">Logout</Link></li>
                                    <li><Link to="/cycle/trolly"><img alt='' src="assets/images/trolly-icon.png" /></Link></li>
                                    <li><Link to="/cycle/search"><img alt='' src="assets/images/search-icon.png" /></Link></li>
                                </>
                            )}
                            {!isAuthenticated && (
                                <>
                                    <li><Link className="nav-btns" to="/login">Login</Link></li>
                                    <li><Link className="nav-btns" to="/register">Register</Link></li>

                                </>
                            )}
                        </ul>
                    </div>
                    <div></div>
                </form>
            </div>

        </nav>

    );
}