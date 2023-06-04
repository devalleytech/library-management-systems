import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from '../../Utility/UserService';

const List = () => {
    const navigate = useNavigate();
  
  const userStatusAfterlogin = localStorage.getItem("userStatus");
  const [userStatus, setUserStatus] = useState(userStatusAfterlogin);

     useEffect(() => {
      setUserStatus(userStatusAfterlogin);
   }, [userStatusAfterlogin]);
   
    if (!userStatus) {
      navigate("/login");
    } 
  
  const [users, setUsers] = useState([]);
  
 const getAllUsers = async () => {
    return await getUser().then((res) => setUsers(res)).catch(e => {
      console.log(e);
    });
  }
  

    useEffect(() => {
      getAllUsers();
   }, []);

    return (
        <>
            <div className="listtitle"><span>User List</span></div>
            <table className="table bg-light table-striped table-responsive w-100">
                
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((res) => {
                    return (<tr>
                      <td>{res.fname+" "+res.lname}</td>
                      <td>{res.email}</td>
                      <td>{res.phone}</td>
                      <td>{res.role}</td>
                  </tr>)
                  })
                  }
                
                </tbody>
              </table>
        </>
   )
}

export default List;