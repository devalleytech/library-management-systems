import React, { useState} from "react";
import { useNavigate, useLocation, Link  } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Users.css';
import { useUserInfoContext } from "./UserContext";

const Editrole = () => {
  
  const { state } = useLocation();
  const navigate = useNavigate();
    const { setUserInfo } = useUserInfoContext();
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
        setUserInfo(data);
        toast.success('User role have been updated successfully!');
            setTimeout(() => {
              navigate("/dashboard/list");
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
      <div className="col-lg-8 col-xl-8">
        <div className="text-black">
            <div className="row justify-content-left">
              <div className="col-md-12 col-lg-12 col-xl-12">
                <div className="listtitle">
                 <h3 className="title py-2">Update User Role</h3></div>
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
                     <Link  to="/dashboard/list"><button className="btn w-100 btn-small">Back</button></Link>
                    </div>
                  </div>
                </form>
                </div>
            </div>
              </div>
              </div>
          </div>
     </>
   )
}

export default Editrole;