import React, { useState, useEffect } from "react";
import { useNavigate,  } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userLoginFormValidation } from '../../Utility/Validations/UsersValidation';
import './Users.css';
import { useUserInfoContext } from "./UserContext";

const Login = () => {

  const { setUserInfo } = useUserInfoContext();
  const navigate = useNavigate();
   const initialUserFormState = {
    email: "",
    password: "",
  };

  const [userLoginForm, setuserLoginForm] = useState(initialUserFormState);
  const [errors, setErrors] = useState({});

  const handleOnInputChange = (event) => {
    const { name, value } = event.target;
    setuserLoginForm({ ...userLoginForm, [name]: value });
  };

   const checkUserCredencials = (serverUsers,formData) => {
     const user = serverUsers.find(user => user.email === formData.email && user.password === formData.password);
     if (user) return user;
  };


  const handleOnLoginFormSubmit =  (event) => {
    event.preventDefault();
    setErrors(userLoginFormValidation(userLoginForm));
    if (!userLoginForm.email ||!userLoginForm.password)
      return;
    
    fetch('http://localhost:3030/user')
        .then(response => response.json()) 
        .then(data => {
          console.log(data);
          let chekcUser = checkUserCredencials(data, userLoginForm);
          if (chekcUser) {
            const { role } = chekcUser;
             setUserInfo(chekcUser);
            localStorage.setItem('userStatus', true);
            toast.success(`${role} Logged-In Successfully!`);
            setTimeout(() => {
              navigate("/dashboard");
            }, 4000);
          } else {
            setuserLoginForm(initialUserFormState);
            toast.warn(`Bad Credencials`);
          }
        })
        .catch(e => {
           console.log(e);
        });
    
  };
  
  const loginFormReset = (event) => {
    event.preventDefault();
    setErrors({});
    setuserLoginForm(initialUserFormState);
  }


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
    <div className="row d-flex justify-content-center align-items-center mt-5">
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
                <h3 className="text-center mx-md-4 mt-4 bd-title">User Login</h3>
                <form className="mx-1 mx-md-6" onSubmit={handleOnLoginFormSubmit}>
                  <div className="d-flex flex-row align-items-center ">
                    <div className="form-outline flex-fill">
                    <label className="form-label" htmlFor="email">Email *</label>
                        <input type="text" id="email" value={userLoginForm.email}
                        onChange={handleOnInputChange} name="email" className="form-control" />
                        {errors.email && (
                        <div className="alert alert-danger py-1" role="alert">
                          {errors.email}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mt-3 mb-2">
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="password">Password *</label>
                      <input type="password" id="password" value={userLoginForm.password}
                        onChange={handleOnInputChange} name="password" className="form-control" />
                        {errors.password && (
                        <div className="alert alert-danger py-1" role="alert">
                          {errors.password}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="row register-btn mt-2 py-4">
                    <div className="col-md-6 col-sm-6 col-lg-6 buttonClass">
                      <button type="submit" >
                      Submit
                    </button>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-6 buttonClass">
                       <button type="submit" onClick={loginFormReset} >
                      Reset
                    </button>
                      </div>  
                  </div>
                </form>
                </div>
            </div>
          </div>
        </div>
        </div>
    </div>
    )
}

export default Login;