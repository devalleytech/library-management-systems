import React, {useEffect, useState} from "react";
import { useNavigate, Outlet } from "react-router-dom";
import './Dashboard.css';
import Sidebar from '../../Layout/Leftmenu';


const Dashboard = () => {
   
  const navigate = useNavigate();
  const userStatusAfterlogin = localStorage.getItem("userStatus");
  const [userStatus, setUserStatus] = useState(userStatusAfterlogin);

  function redirectCheck() {
    if (!userStatus) {
      navigate("/login");
    } else if (userStatus) {
        navigate("/dashboard");
    } 
  }
     useEffect(() => {
       setUserStatus(userStatusAfterlogin);
       redirectCheck();
   }, [userStatusAfterlogin]);
   
    
  
    return (
      <>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-3 table-responsive  mt-4">
               <div className="usertitle"><span>Quick Links</span></div>
               <div className="leftMenu py-4"><Sidebar /></div>
            </div>
            <div className="col-md-9 table-responsive bg-light mt-4 border">
               <Outlet/> 
            </div>
          </div>
        </div>
    </>
    )
}
export default Dashboard;