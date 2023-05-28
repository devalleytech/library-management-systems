import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="navbar navbar-expand-lg flex-column flex-md-row py-3 bd-navbar">
            <nav className="container px-3">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                    <Link to="/" className="nav-link active">Home</Link>
                    </li>
                </ul>
                <div className="form-inline my-2 my-lg-0">
                <Link className="top-link" to="/login">Login</Link> | <Link className="top-link" to="/register">Register</Link>  
                </div>
            </nav>
        </header>
    )
}

export default Header;