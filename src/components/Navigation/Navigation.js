import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function Navigation() {
    const { isAuthenticated, userEmail } = useContext(AuthContext);
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="logo"><img alt='' src="assets/images/logo.png" /></Link>
            <div className="collapse navbar-collapse" id="navigation">
                <ul className="navbar-nav mr-auto ">
                    <li className="nav-item active ">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/catalog">Shop</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contacts">Contacts</Link>
                    </li>

                    {isAuthenticated && (
                        <li className="nav-item">
                            <Link className="nav-link" to="/create">Add Bike</Link>
                        </li>
                    )}
                    <li className="nav-item">
                        <Link className="nav-link" to="/news">News</Link>
                    </li>
                </ul>

                <form className="form-inline my-2 my-lg-0">
                    <div className="login_menu">
                        <ul>
                            {isAuthenticated && (
                                <>
                                    <li>Welcome, {userEmail}!</li>
                                    <li><Link to="/search" className="nav-btns"><img alt='' src="assets/images/search-icon.png" /></Link></li>
                                    <li><Link className="nav-btns" to="/logout">Logout</Link></li>
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