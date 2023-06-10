import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./users.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userRegisterFormValidation } from '../../Utility/Validations/users-validation';


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
    createdAt: new Date().toString('dd/mm/yy').split(',')[0].slice(0,15),
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
    fetch('http://localhost:3030/user')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let chekcUser = checkEmailAlreadyExists(data, userForm);
        if (chekcUser) {
          toast.warn('Sorry Email Already Exists!');
        } else {
          fetch('http://localhost:3030/user', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userForm)
          }).then((result) => {
            setUserForm(initialUserFormState);
            setErrors({});
            toast.success('User Registration have been done Successfully!');
            setTimeout(() => {
              navigate("/login");
            }, 4000);
          }).catch(e => {
            console.log(e);
          });
        }
      });
  };


  const userStatusAfterlogin = localStorage.getItem("userStatus");
  const [userStatus, setUserStatus] = useState(userStatusAfterlogin);
  
  function redirectCheck() {
     if (userStatus) {
        navigate("/dashboard");
    } 
  }

     useEffect(() => {
       setUserStatus(userStatusAfterlogin);
       redirectCheck();
   }, [userStatusAfterlogin]);
   
   

  return (
    <div className="row d-flex justify-content-center align-items-center mt-2">
      <ToastContainer
          position="top-center"
          theme="light"
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={true}
          style={{ width: '500px' }}
      />
      
      <div className="col-lg-6 col-xl-8">
        <div className="jumbotron text-center mt-2 py-4">
          <h1>Registration</h1>
          <p>Resize this responsive page to see the effect!</p>
            </div>
        <div className="card text-black">
 
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-10 col-xl-10 mt-2 py-2 order-2 order-lg-1">
                <form className="mx-1 mt-4 mx-md-6" onSubmit={handleOnFormSubmit}>
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
                        <div className="alert alert-danger  py-1" role="alert">
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
                        <div className="alert alert-danger  py-1" role="alert">
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
                        <div className="alert alert-danger py-1" role="alert">
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
                        <div className="alert alert-danger py-1" role="alert">
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
                        <div className="alert alert-danger  py-1" role="alert">
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
                  <div className="row mb-4 mt-4">
                    <div className="col-md-5 col-sm-5 col-lg-5 mx-2 px-2 py-2 buttonClass">
                      <button type="submit" >
                      Submit
                    </button>
                    </div>
                    <div className="col-md-5 col-sm-5 col-lg-5 mx-4  px-2 py-2 buttonClass">
                       <button type="button" onClick={() => navigateToHome()}>
                      Reset
                    </button>
                    </div>
                  </div>
                </form>
                
              </div>
            </div>
        </div>
          <p className="col-sm-10 mx-4 py-4 mb-4 p-4"></p> 
      </div>
    </div>
  );
};

export default Signup;
