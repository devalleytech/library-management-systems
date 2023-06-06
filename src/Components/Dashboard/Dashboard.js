import React from "react";
import { Outlet } from "react-router-dom";
import './Dashboard.css';
import Sidebar from '../../Layout/Leftmenu';


const Dashboard = () => {
   
    return (
      <>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-4 table-responsive mt-4">
               <div className="usertitle"><span>Quick Links</span></div>
               <div className="leftMenu py-4"><Sidebar /></div>
            </div>
            <div className="col-md-8 table-responsive bg-light mt-4  py-4 border">
              <Outlet /> 
                <p className="col-md-8  py-4"></p>
            </div>
          </div>
        </div>
    </>
    )
}
export default Dashboard;