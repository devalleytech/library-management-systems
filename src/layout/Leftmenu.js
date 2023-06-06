import React from "react";
import './Leftmenu.css';
import { Link } from "react-router-dom";


const Sidebar = () => {
    return (
        <>
          <div className="arrow-right">
          <ul>
            <li><Link  to="/dashboard" className="nav-link active">Dashboard</Link></li>
            <li><Link to="/dashboard/list" className="nav-link active">User List</Link></li>
            <li><Link to="/dashboard/addbook" className="nav-link active">Add Book</Link></li>
            <li>Menu 3 Menu 3</li>
            <li>Menu 4</li>
            </ul> 
            </div>
            
        </>
    )
} 

export default Sidebar;

