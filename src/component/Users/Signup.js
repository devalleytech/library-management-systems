import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./users.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUserPlus } from "react-icons/fa";
import {userRegisterFormValidation} from '../../common/ValidateUsers';
import { postUser,getUser } from '../../common/user.service';



const Signup = () => {

  const navigate = useNavigate();

  const initialUserFormState = {
    id: null,
    fname: "",
    lname: "",
    email: "",
    phone: "",
    password: "",
    role: "Member",
  };

  const [userForm, setUserForm] = useState(initialUserFormState);
  const [errors, setErrors] = useState({});

  const handleOnInputChange = (event) => {
       const { name, value } = event.target;
       setUserForm({ ...userForm, [name]: value });
  };

  const navigateToHome = () => {
    setUserForm(initialUserFormState);
    setErrors({});
  }

   const checkEmailAlreadyExists = (serverUsers,formData) => {
     const user = serverUsers.find(user => user.email === formData.email);
    if (user) return user;
  };

  const handleOnFormSubmit =  async (event) => {
    event.preventDefault();
    setErrors(userRegisterFormValidation(userForm));
    if (
      !userForm.fname ||
      !userForm.lname ||
      !userForm.email ||
      !userForm.phone ||
      !userForm.password ||
      !userForm.role
    )
     return;
    const user = await getUser().then(res => checkEmailAlreadyExists(res, userForm));
    if (user) {
      toast.warn('Email Already Exists!');
    } else {
         postUser(userForm).then((result) => {
            setUserForm(initialUserFormState);
            setErrors({});
            toast.success('User Registration have been done Successfully!');
            setTimeout(() => {
              navigate("/login");
            }, 4000);
        });
      }
  };


  const userStatusAfterlogin = localStorage.getItem("userStatus");
   const [userStatus, setUserStatus] = useState(userStatusAfterlogin);
     useEffect(() => {
      setUserStatus(userStatusAfterlogin);
   }, [userStatusAfterlogin]);
   
    if (userStatus) {
      navigate("/profile");
    } 


  return (
    <div className="row d-flex justify-content-center align-items-center mt-3">
      <ToastContainer
          position="top-center"
          theme="light"
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={true}
          style={{ width: '500px' }}
        />
      <div className="col-lg-4 col-xl-8">
        <div className="card text-black">
          <div className="card-body">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-10 col-xl-10 order-2 order-lg-1">
                <div className="row">
                    <div className="col-md-6">
                      &nbsp;
                    </div>
                    <div className="col-md-6">
                      &nbsp;
                    </div>
                  </div>
                <h3 className="text-center mb-4 mx-md-4 mt-2 bd-title">
                  <FaUserPlus className="userIcon" />
                    User Registration
                </h3>
                <form className="mx-1 mx-md-6" onSubmit={handleOnFormSubmit}>
                   <div className="row">
                    <div className="col-md-6"> &nbsp;</div>
                    <div className="col-md-6"> &nbsp; </div>
                  </div>
                  <div className="row d-flex flex-row align-items-center mb-2">
                    <div className="form-outline flex-fill w-50 col-md-3">
                      <label className="form-label" htmlFor="fname">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="fname"
                        value={userForm.fname}
                        onChange={handleOnInputChange}
                        id="fname"
                        className="form-control"
                      />
                      {errors.fname && (
                        <div className="alert alert-danger" role="alert">
                          {errors.fname}
                        </div>
                      )}
                    </div>
                    <div className="form-outline flex-fill w-50 col-md-3">
                      <label className="form-label" htmlFor="lname">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lname"
                        value={userForm.lname}
                        onChange={handleOnInputChange}
                        id="lname"
                        className="form-control"
                      />
                      {errors.lname && (
                        <div className="alert alert-danger" role="alert">
                          {errors.lname}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-2">
                    <div className="form-outline flex-fill">
                      <label className="form-label" htmlFor="email">
                        Phone *
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={userForm.phone}
                        onChange={handleOnInputChange}
                        id="phone"
                        className="form-control"
                      />
                      {errors.phone && (
                        <div className="alert alert-danger" role="alert">
                          {errors.phone}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-2">
                    <div className="form-outline flex-fill">
                      <label className="form-label" htmlFor="email">
                        Email *
                      </label>
                      <input
                        type="text"
                        name="email"
                        value={userForm.email}
                        onChange={handleOnInputChange}
                        id="email"
                        className="form-control"
                      />
                      {errors.email && (
                        <div className="alert alert-danger" role="alert">
                          {errors.email}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-2">
                    <div className="form-outline flex-fill">
                      <label className="form-label" htmlFor="password">
                        Password *  
                      </label>
                      <input
                        type="password"
                        value={userForm.password}
                        name="password"
                        onChange={handleOnInputChange}
                        id="password"
                        className="form-control"
                      />
                      {errors.password && (
                        <div className="alert alert-danger" role="alert">
                          {errors.password}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-2">
                    <div className="form-outline flex-fill mt-1">
                      <label className="form-label" htmlFor="role">
                        Role
                      </label>
                      <select
                        className="form-select"
                        name="role"
                        aria-label="role"
                        onChange={handleOnInputChange}
                      >
                        <option defaultValue={"Member"}>Member</option>
                        <option value={"Librarian"}>Librarian</option>
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6"> &nbsp;</div>
                    <div className="col-md-6"> &nbsp; </div>
                  </div>
                  <div className="row register-btn">
                    <div className="col-md-6 buttonClass">
                      <button type="submit" >
                      Submit
                    </button>
                    </div>
                    <div className="col-md-6 buttonClass">
                       <button type="button" onClick={() => navigateToHome()}>
                      Reset
                    </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      &nbsp;
                    </div>
                    <div className="col-md-6">
                      &nbsp;
                    </div>
                  </div>
                </form>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
