import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from '../../common/user.service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {userLoginFormValidation} from '../../common/validateUsers';
import './users.css';

const Login = () => {

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


  const handleOnLoginFormSubmit = async (event) => {
    event.preventDefault();
    setErrors(userLoginFormValidation(userLoginForm));
    if (!userLoginForm.email ||!userLoginForm.password)
      return;
    
    const user = await getUser().then(res => checkUserCredencials(res, userLoginForm));
    
    if (user) {
      const { role } = user;
      localStorage.setItem('userInfo', JSON.stringify(user));
      localStorage.setItem('loginStatus', true);
      toast.success(`${role} Logged-In Successfully!`);
      setTimeout(() => {
        navigate("/profile");
      }, 4000);
    }
  };
  
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
                <h3 className="text-center mb-4 mx-md-4 mt-4 bd-title">Login</h3>
                <form className="mx-1 mx-md-6" onSubmit={handleOnLoginFormSubmit}>

                  <div className="d-flex flex-row align-items-center mb-2">
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="email">Email</label>
                        <input type="text" id="email" value={userLoginForm.email}
                        onChange={handleOnInputChange} name="email" className="form-control" />
                        {errors.email && (
                        <div className="alert alert-danger p-2" role="alert">
                          {errors.email}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-2">
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="password">Password</label>
                      <input type="password" id="password" value={userLoginForm.password}
                        onChange={handleOnInputChange} name="password" className="form-control" />
                        {errors.password && (
                        <div className="alert alert-danger p-2" role="alert">
                          {errors.password}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="row register-btn mt-2 py-4">
                    <div className="col-md-6">
                      <button type="submit" className="btn btn-primary btn-large btn-block w-100">
                      Login
                    </button>
                    </div>
                    <div className="col-md-6">
                       <button type="submit" className="btn btn-primary btn-large btn-block w-100">
                      Cancel
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