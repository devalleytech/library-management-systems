import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaPlusSquare, FaSearch } from "react-icons/fa";
import './dashboard.css';

const Dashboard = () => {

  const location = useLocation();
  const checkForoutlet = location.pathname;


  const [users, setUsers] = useState([]);
   const [books, setBooks] = useState([]);
 
    useEffect(() => {
        fetch('http://localhost:3030/user')
        .then(response => response.json()) 
        .then(data => {
          setUsers(data);
        })
        .catch(error => console.error(error));
    }, []);
  
    useEffect(() => {
        fetch('http://localhost:3131/book')
        .then(response => response.json()) 
        .then(data => {
          setBooks(data);
        })
        .catch(error => console.error(error));
    }, []);
    return (
      <>
        {(checkForoutlet==="/dashboard") && <div className="py-2 mt-2">
          
          <div className="jumbotron text-center py-2 mt-4">
            <Link><h1>Dashboard</h1></Link>
          </div>
          <div className="container py-4">
             <p className="col-sm-10 mx-4 py-2 mb-2 p-4"></p> 
            <div className="row">
              <div className="col-sm-3 col-md-3">
                  <div className="title">
                    <Link to="/dashboard/users-list"><h3>Users</h3></Link>
                    <span className="badge bg-primary badge-pill">{users && users.length}</span>
                </div>
              </div>
              
              <div className="col-sm-3 col-md-3">
                  <div className="title">
                    <Link to="/dashboard/books-list"><h3>Books</h3></Link>
                    <span className="badge bg-primary badge-pill">{users && users.length}</span>
                </div>
              </div>
              <div className="col-sm-3 col-md-3">
                  <div className="title">
                    <Link to="/dashboard/addbook"><h3>Add Book</h3></Link>&nbsp;<span><FaPlusSquare size={25} color="#333b7d" /></span>
                </div>
              </div>
              <div className="col-sm-3 col-md-3">
                  <div className="title">
                    <Link to="/dashboard/books-list"><h3>Search Book</h3></Link>&nbsp;<span><FaSearch size={25} color="#333b7d" /></span>
                </div>
              </div>
            </div>
            {/* <Outlet />  */}
          </div>
        </div>}

        {(checkForoutlet!=="/dashboard") && <div className="py-4">
             <Outlet /> 
        </div>}
</>
    )
}
export default Dashboard;