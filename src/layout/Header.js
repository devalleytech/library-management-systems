import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Header.css';
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import Modal from 'react-modal';

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

    const navigate = useNavigate();
    let userInfo;
    const userStatusAfterlogin = localStorage.getItem("userStatus");
    const [userStatus, setUserStatus] = useState(userStatusAfterlogin);
    const [modalIsOpen, setIsOpen] = useState(false);
     
     useEffect(() => {
      setUserStatus(userStatusAfterlogin);
   }, [userStatusAfterlogin]);
   
    if (userStatus) {
        userInfo = JSON.parse(localStorage.getItem("userInfo"));
    }


    function openModal() {
    setIsOpen(true);
  }

//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     subtitle.style.color = '#f00';
//   }

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
            <nav className="container">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active">Home</Link>
                    </li>
                </ul>
                <div className="form-inline ">
                    {userStatus && <div>
                        <button className="btn btn-secondary" onClick={openModal}>
                        {userInfo?.role}
                        </button>
                        &nbsp;&nbsp;<Link className="top-link" onClick={handleLogout}><FaSignOutAlt className="logoutIcon" /></Link></div>} 
                     {!userStatus && <><Link className="top-link" to="/register">Register</Link> | <Link className="top-link" to="/login">Login</Link></>}
                </div>
            </nav>
            </header>
            
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
                <div className="table-responsive">  
                <div className="usertitle"><span>Welcome: </span><i>{userInfo?.role}</i>
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
                        <th>Created At</th><td>1</td>
                    </tr>
                    </tbody>
                    </table>
            </div>     
           </Modal>
        </>
        
       
    )
}

export default Header;