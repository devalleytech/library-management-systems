import React, { useState, useEffect } from "react";
import { useNavigate,  } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUser } from '../../Utility/Services/UserService';
import { useUserInfoContext } from "../../Utility/ContextApi/user-context";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './users.css';


const Login = () => {

  const { setUserInfo } = useUserInfoContext();
  const navigate = useNavigate();
  
  const userStatusAfterlogin = localStorage.getItem("userStatus");
  const [userStatus, setUserStatus] = useState(userStatusAfterlogin);

     useEffect(() => {
       setUserStatus(userStatusAfterlogin);
        if (userStatus) {
        navigate("/dashboard");
       } 
     }, [userStatus]);
  

  return (
    <div className="row d-flex justify-content-center align-items-center">
        <ToastContainer
          position="top-center"
          theme="light"
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={true}
          style={{ width: '500px' }}
        />
      <div className="col-lg-4 col-xl-8">
          <div className="jumbotron text-center mt-2 py-4">
            <h1>Login</h1>
            <p>Resize this responsive page to see the effect!</p>
          </div>
        <div className="card text-black py-4">
            <div className="row justify-content-center py-2">
            <div className="col-md-10 col-lg-10 col-xl-10 order-2 order-lg-1">
              <Formik
                initialValues={{ password: '', email: '' }}
                validationSchema={Yup.object({
                  password: Yup.string().max(20, 'Must be 20 characters or less').required('Password Required'),
                  email: Yup.string().email('Invalid email address').required('Email Required'),
                })}
                onSubmit={ (values, {setSubmitting }) => {
                  setTimeout(() => {
                     getUser()
                      .then(data => {
                        let chekcUser = data.find(user => user.email === values.email && user.password === values.password);
                        if (chekcUser) {
                            const { role } = chekcUser;
                            toast.success(`${role} Logged-In Successfully!`);
                            setUserInfo(chekcUser);
                            localStorage.setItem('userStatus', true);
                            setTimeout(() => {
                              navigate("/dashboard");
                            }, 1000);
                        } else {
                          setSubmitting(false);
                          toast.warn(`Bad Credencials`);
                        }
                      })
                      .catch(e => {
                        console.log(e);
                      });
                    setSubmitting(false);
                  }, 400);
                }}
              >
             <Form className="mx-1 mx-md-6">
                  <div className="d-flex flex-row align-items-center py-2">
                    <div className="form-outline flex-fill">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                      <Field name="email" type="email" className="form-control" />
                        <ErrorMessage component="span" className="alert alert-danger py-1"  name="email" />
                   </div>
                  </div>
                  <div className="d-flex flex-row align-items-center py-2">
                    <div className="form-outline flex-fill">
                    <label htmlFor="password" className="form-label">Password *</label>
                    <Field name="password" type="password" className="form-control" />
                        <ErrorMessage name="password" component="span" className="alert alert-danger py-1" />
                   </div>
                  </div>

                  <div className="row mb-4 py-2 mt-4">
                    <div className="col-md-5 mx-2 px-2 buttonClass">
                      <button type="submit" >
                      Submit
                    </button>
                    </div>
                    <div className="col-md-5 mx-4 px-4 buttonClass">
                       <button type="reset">Reset</button>
                    </div>
                  </div>
                </Form>
             </Formik>
              </div>
            </div>
          </div>
        </div>
    </div>
    )
}

export default Login;