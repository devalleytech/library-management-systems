import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import notfound from './pagenotfound.png';
import './Notfound.css';

const Notfound = () => {
    const navigate = useNavigate();
  
  const userStatusAfterlogin = localStorage.getItem("userStatus");
  const [userStatus, setUserStatus] = useState(userStatusAfterlogin);

   useEffect(() => {
      setUserStatus(userStatusAfterlogin);
   }, [userStatusAfterlogin]);
   
    if (!userStatus) {
      navigate("/login");
    } 
    return (
        <>
            <div className="notfound">
                <img src={notfound} alt="logo" />
            </div>
        </>
   )
}

export default Notfound;