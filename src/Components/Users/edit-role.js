import React, { useState} from "react";
import { useNavigate, useLocation, Link  } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './users.css';
import { useUserInfoContext } from "../../Utility/ContextApi/user-context";


const Editrole = () => {
  
  const { state } = useLocation();
  const navigate = useNavigate();
  const { setUserInfo, getUser } = useUserInfoContext();

  const [userForm, setUserForm] = useState(state);
  const updateRoleUrl = 'http://localhost:3030/user/';
 
  
  const handleOnRoleChange = (event) => {
      const { name, value } = event.target;
      setUserForm({ ...userForm, [name]: value });
  };

  const handleOnRoleSubmit = (event) => {
    event.preventDefault();
    const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userForm)
    };
       
    fetch(`${updateRoleUrl}${state.id}`, requestOptions)
        .then(response => response.json())
      .then(data => {
        if (getUser.id === data.id) {
           setUserInfo(data);
        }
        toast.success('User role have been updated successfully!');
            setTimeout(() => {
              navigate("/dashboard/users-list");
            }, 3000);
      });
  };
  
    return (
        <>
        <div className="row">
            <ToastContainer
            position="top-center"
            theme="light"
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop={true}
            style={{ width: '500px' }}
          />
          <div className="jumbotron text-center py-2">
            <Link><h1>Update Role</h1></Link>
          </div>
        <div className="container py-2">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-sm-8 card">
               <div className="row mt-2 py-2 px-4">
                  <form className="mx-1 mx-md-6" onSubmit={handleOnRoleSubmit}>
                   <div className="d-flex flex-row align-items-center mt-4 mx-4">
                    <div className="form-outline flex-fill mt-1">
                      <label className="form-label" htmlFor="role">
                        Role
                      </label>
                      <select
                        className="form-select"
                        name="role"
                        value={userForm.role }
                        aria-label="role"
                        onChange={handleOnRoleChange} >                      
                        <option value={"Member"}>Member</option>
                        <option value={"Librarian"}>Librarian</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mt-2 mx-3 py-4">
                    <div className="col-md-6 col-sm-5 col-lg-5 buttonClass">
                      <button type="submit" className="btn w-100 btn-small" >
                      Submit
                      </button>
                       </div>
                    <div className="col-md-6  col-sm-5 col-lg-5 backClass">
                     <Link  to="/dashboard/users-list"><button className="btn w-100 btn-small">Back</button></Link>
                    </div>
                  </div>
                </form>
                  
                  <div className="py-4"></div>
                </div>
              </div>
            </div>
          </div>
          
          </div>
     </>
   )
}

export default Editrole;