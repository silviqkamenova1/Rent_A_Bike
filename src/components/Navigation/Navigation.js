import React from "react";

export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a href="index.html" className="logo"><img alt='' src="assets/images/logo.png" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/create">Add Cycle</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/shop">Shop</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/news">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact Us</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <div className="login_menu">
                        <ul>
                            <li><a href="/login">Login</a></li>
                            <li><a href="/login">Register</a></li>
                            <li><a href="/login">Logout</a></li>
                            <li><a href="/cycle/trolly"><img alt='' src="assets/images/trolly-icon.png" /></a></li>
                            <li><a href="/cycle/search"><img alt='' src="assets/images/search-icon.png" /></a></li>
                        </ul>
                    </div>
                    <div></div>
                </form>
            </div>
        </nav>
    );
}