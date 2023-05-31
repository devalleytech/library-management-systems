import React from "react";
import './Header.css';
import { Link, useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

const Header = () => {

    const navigate = useNavigate();
    const handleLogout = (event) => {
        event.preventDefault();
        localStorage.removeItem('loginStatus');
        localStorage.removeItem('userInfo');
        navigate("/");
     }

    let loggedInStatus, userInfo;

    if (Object.keys('localStorage').length === 0) {
        navigate("/"); 
    } else {
        loggedInStatus = localStorage.getItem("loginStatus");
        userInfo = JSON.parse(localStorage.getItem("userInfo"));
    }

    return (
        <header className="navbar navbar-expand-lg flex-column flex-md-row  bd-navbar">
            <nav className="container">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                      <Link to="/" className="nav-link active">Home</Link>
                    </li>
                </ul>
                <div className="form-inline ">
                    {loggedInStatus ? <Link className="top-link" onClick={handleLogout}><FaSignOutAlt className="logoutIcon" /></Link> : <Link className="top-link" to="/register">Register</Link>} | { loggedInStatus ? <span className="userType">{ userInfo?.role } </span> : <Link className="top-link" to="/login">Login</Link> }
                </div>
            </nav>
        </header>
    )
}

export default Header;