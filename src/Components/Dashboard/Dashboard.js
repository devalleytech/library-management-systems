import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import './dashboard.css';

const Dashboard = () => {

  const location = useLocation();
  const checkForoutlet = location.pathname;


  const [users, setUsers] = useState([]);
 
    useEffect(() => {
        fetch('http://localhost:3030/user')
        .then(response => response.json()) 
        .then(data => {
          setUsers(data);
        })
        .catch(error => console.error(error));
    }, []);


    return (
      <>
        {(checkForoutlet==="/dashboard") && <div className="py-4">
          <div className="jumbotron text-center py-2">
            <Link><h1>Dashboard</h1></Link>
          </div>
          <div className="container py-4">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-sm-3 mx-4 card">
               <div className="row mt-2 py-2 px-4">
                  <div className="col-sm-12 mb-2 py-2 title">
                    <Link to="/dashboard/list"><h3>Users</h3></Link>
                    <span className="badge bg-primary badge-pill">{users && users.length}</span>
                  </div>
                  <ul className="list-group mt-2 py-2">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Cras justo odio
                      <span className="badge badge-primary badge-pill">14</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Dapibus ac facilisis in
                      <span className="badge badge-primary badge-pill">2</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Morbi leo risus
                      <span className="badge badge-primary badge-pill">1</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Morbi leo risus
                      <span className="badge badge-primary badge-pill">1</span>
                    </li>
                  </ul>
                  <div className="py-2"></div>
                </div>
              </div>
              <div className="col-sm-3 mx-4 card">
                <div className="row mt-2 py-2 px-4">
                  <div className="col-sm-12 mb-2 py-2 title">
                    <Link to="/dashboard/list"><h3>Books</h3></Link>
                    <span className="badge bg-primary badge-pill">14</span>
                  </div>
                  <ul className="list-group mt-2 py-2">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Cras justo odio
                      <span className="badge badge-primary badge-pill">14</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Dapibus ac facilisis in
                      <span className="badge badge-primary badge-pill">2</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Morbi leo risus
                      <span className="badge badge-primary badge-pill">1</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Morbi leo risus
                      <span className="badge badge-primary badge-pill">1</span>
                    </li>
                  </ul>
                  <div className="py-2"></div>
                </div>
              </div>
              <div className="col-sm-3 mx-4 card">
               <div className="row mt-2 py-2 px-4">
                  <div className="col-sm-12 mb-2 py-2 title">
                    <Link to="/dashboard/list"><h3>Users</h3></Link>
                    <span className="badge bg-primary badge-pill">14</span>
                  </div>
                  <ul className="list-group mt-2 py-2">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Cras justo odio
                      <span className="badge badge-primary badge-pill">14</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Dapibus ac facilisis in
                      <span className="badge badge-primary badge-pill">2</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Morbi leo risus
                      <span className="badge badge-primary badge-pill">1</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Morbi leo risus
                      <span className="badge badge-primary badge-pill">1</span>
                    </li>
                  </ul>
                  <div className="py-2"></div>
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