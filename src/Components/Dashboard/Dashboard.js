import React, {useEffect, useState} from "react";
import { useNavigate, Outlet } from "react-router-dom";
import './Dashboard.css';
import Sidebar from '../../Layout/Leftmenu';


const Dashboard = () => {
   
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
        <div className="container mt-4 ">
          <div className="row">
            <div className="col-md-4 table-responsive mt-3">
               <div className="usertitle"><span>Quick Links</span></div>
               <div className="leftMenu py-4"><Sidebar /></div>
            </div>
            <div className="col-md-8 table-responsive bg-light mt-4 border">
               <Outlet/> 
            </div>
          </div>
        </div>

    </>
    )
}
export default Dashboard;