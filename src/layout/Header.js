import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Header.css';
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import Modal from 'react-modal';
import lmslogo from './lmslogo.png';
import { useUserInfoContext } from "../Components/Users/UserContext";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:'50%'
  },
};

const Header = () => {

    const { getUser } = useUserInfoContext();
    const navigate = useNavigate();
    let userInfo;
    const userStatusAfterlogin = localStorage.getItem("userStatus");
    const [userStatus, setUserStatus] = useState(userStatusAfterlogin);
    const [modalIsOpen, setIsOpen] = useState(false);
     
     useEffect(() => {
         setUserStatus(userStatusAfterlogin);
     }, [userStatusAfterlogin]);
    
    
    if (userStatus) {
        userInfo = getUser;
    }

   
    
 function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
    

    const handleLogout = (event) => {
        event.preventDefault();
        localStorage.removeItem('userInfo');
        localStorage.removeItem('userStatus');
        setUserStatus(false);
        navigate("/login");
    }

    return (
        <>
            <header className="navbar navbar-expand-lg flex-column flex-md-row bd-navbar px-2">
                
                 <div className="logo">
                        <Link to="/"><img src={lmslogo} alt="logo" height={'50px'} /></Link>
                        <span>LMS</span>
                </div>
                 
                <nav className="container">
                 
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link active">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/service" className="nav-link active">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link active">Contact Us</Link>
                    </li>
                </ul>
                <div className="form-inline ">
                        {userStatus && <div className="welcome">
                            Welcome:&nbsp;<small onClick={openModal}>{userInfo?.fname}</small> 
                            &nbsp;&nbsp;<Link className="top-link" to="/dashboard">
                                <button className="btn btn-secondary">
                                        {userInfo?.role}
                                </button>
                            </Link>
                        &nbsp;&nbsp;<Link className="top-link" onClick={handleLogout}><FaSignOutAlt className="logoutIcon" /></Link></div>} 
                     {!userStatus && <><Link className="top-link" to="/register">Register</Link> | <Link className="top-link" to="/login">Login</Link></>}
                </div>
            </nav>
            </header>
            
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="User information">
                <div className="table-responsive">  
                <div className="usertitle"><h4>Welcome: <i>{userInfo?.role}</i></h4>
                 <button type="button" class="btn-close" aria-label="Close" onClick={closeModal}></button></div>   
                    <table className="table bgCustom table-responsive w-100 d-block d-md-table">
                    <tbody>
                    <tr>
                        <th>Name</th><td>{userInfo?.fname+" "+userInfo?.lname}</td>
                    </tr>
                    <tr>
                        <th>Email</th><td>{userInfo?.email}</td>
                    </tr>
                    <tr>
                        <th>Phone</th><td>{userInfo?.phone}</td>
                    </tr>
                    <tr>
                        <th>Role</th><td>{userInfo?.role}</td>
                    </tr>
                    <tr>
                        <th>Created At</th><td>{userInfo?.createdAt}</td>
                    </tr>
                    </tbody>
                    </table>
            </div>     
           </Modal>
        </>
        
       
    )
}

export default Header;