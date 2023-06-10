import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";

const Userlist = () => {
  
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
 

    useEffect(() => {
        fetch('http://localhost:3030/user')
        .then(response => response.json()) 
        .then(data => {
          console.log(data);
          setUsers(data);
        })
        .catch(error => console.error(error));
    }, []);

  
  const editRole = (resObj) => {
    navigate("/dashboard/editrole", {state:resObj});
  }

    return (
      <>
         <div className="jumbotron text-center py-2">
            <Link><h1>Users List</h1></Link>
          </div>
        <div className="container py-2">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-sm-10 mx-4 card">
               <div className="row mt-2 py-2 px-4">
                  
                   <table className="table bg-light table-striped table-responsive w-100">
                <thead className="thead-dark">
               <tr>
                    <th>SR #</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                    <th scope="col">Created At</th>
                    <th>Update Role</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((res, index) => {
                    return (<tr>
                       <td>{index+1}</td>
                      <td>{res.fname+" "+res.lname}</td>
                      <td>{res.email}</td>
                      <td>{res.role}</td>
                      <td>{res.createdAt}</td>
                      <td><button style={{border:'none'}} onClick={() => editRole(res)}><FaUserEdit className="logoutIcon" /></button></td>
                  </tr>)
                  })
                  }
                
                </tbody>
              </table>
                  <div className="py-1"></div>
                </div>
              </div>
            </div>
          </div>
            
        


           
        </>
   )
}

export default Userlist;