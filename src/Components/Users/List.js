import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from '../../Utility/Services/UserService';
import { FaUserEdit, FaListAlt } from "react-icons/fa";

const Userlist = () => {
  
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  
 const getAllUsers = async () => {
    return await getUser().then((res) => setUsers(res)).catch(e => {
      console.log(e);
    });
  }
    useEffect(() => {
      getAllUsers();
    }, []);
  
  
  const editRole = (resObj) => {
    navigate("/dashboard/editrole", {state:resObj});
  }

    return (
        <>
            <div className="listtitle"><span>User List</span>&nbsp;&nbsp;<FaListAlt className="logoutIcon" /></div>
            <table className="table bg-light table-striped table-responsive w-100">
                <thead className="thead-dark">
               <tr>
                    <th>SR #</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                    <th scope="col">Created At</th>
                    <th>Update role</th>
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
        </>
   )
}

export default Userlist;