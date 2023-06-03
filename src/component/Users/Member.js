import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const MemberProfile = () => {
   
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
    ghfdjhgfjghjfh
    </>
    )
}
export default MemberProfile