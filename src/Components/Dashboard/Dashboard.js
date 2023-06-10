import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import './Dashboard.css';

const Dashboard = () => {

  const location = useLocation();
  const checkForoutlet = location.pathname;

    return (
      <>
        {(checkForoutlet==="/dashboard") && <div className="">
          <div className="jumbotron text-center mt-4 py-4">
            <h1>LMS Dashboard  </h1>
          </div>
          <div className="container mt-4 py-4">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-sm-3 mx-4 card p-4">
                <div className="row ">
                  <div className="col-sm-12 mb-2 title">
                    <Link to="/dashboard/list"><h3>Users</h3></Link>
                    <span className="badge bg-primary badge-pill">14</span>
                  </div>
                  <ul className="list-group mt-4">
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
                </div>
              </div>
              <div className="col-sm-3 mx-4 card p-4">
                <h3>Librarian</h3>
                <div className="py-3"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
              </div>
              <div className="col-sm-3 mx-4 card  p-4">
                <h3>Books</h3>
                <div className="py-3"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
              </div>
            </div>
            {/* <Outlet />  */}
          </div>
        </div>}

        {(checkForoutlet!=="/dashboard") && <div className="card card-body mt-4 px-4">
          <div className="row p-4">
               <Outlet /> 
          </div> 
        </div>}
</>
    )
}
export default Dashboard;