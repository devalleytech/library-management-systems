import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Header.css';
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";


const Header = () => {

    const navigate = useNavigate();
    let userInfo;
    const userStatusAfterlogin = localStorage.getItem("userStatus");
    const [userStatus, setUserStatus] = useState(userStatusAfterlogin);
     
     useEffect(() => {
      setUserStatus(userStatusAfterlogin);
   }, [userStatusAfterlogin]);
   
    if (userStatus) {
        userInfo = JSON.parse(localStorage.getItem("userInfo"));
    }
    

    const handleLogout = (event) => {
        event.preventDefault();
        localStorage.removeItem('userInfo');
        localStorage.removeItem('userStatus');
        setUserStatus(false);
        navigate("/login");
     }

    return (
        <header className="navbar navbar-expand-lg flex-column flex-md-row bd-navbar px-2">
            <nav className="container">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                      <Link to="/" className="nav-link active">Home</Link>
                    </li>
                </ul>
                <div className="form-inline ">
                    {userStatus && <div>
                        <span className="userType">
                        {userInfo?.role}
                        </span>
                        &nbsp;<Link className="top-link" onClick={handleLogout}><FaSignOutAlt className="logoutIcon" /></Link></div>} 
                     {!userStatus && <><Link className="top-link" to="/register">Register</Link> | <Link className="top-link" to="/login">Login</Link></>}
                </div>
            </nav>
        </header>
    )
}

export default Header;