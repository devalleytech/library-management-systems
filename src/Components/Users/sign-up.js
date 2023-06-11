import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postUser, getUser } from '../../Utility/Services/UserService';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./users.css";

const Signup = () => {

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
      <div className="col-lg-8 col-xl-8 py-4">
        <div className="jumbotron text-center mt-2 py-4">
            <h1>Registration</h1>
            <p>Resize this responsive page to see the effect!</p>
          </div>
        <div className="card text-black py-2">

            <div className="row justify-content-center py-4">
              <div className="col-md-10 col-lg-10 col-xl-10 mt-2 order-2 order-lg-1">
             <Formik
                initialValues={{ fname:'', lname:'', phone:'',role:'Member', password: '', email: '',createdAt: new Date().toString('dd/mm/yy').split(',')[0].slice(0,15), }}
                  validationSchema={Yup.object({
                  fname: Yup.string().max(20, 'Must be 20 characters or less').required('Password Required'),
                    lname: Yup.string().max(20, 'Must be 20 characters or less').required('Password Required'),
                    phone: Yup.string().matches(
                     /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                       "Invalid phone number"
                    ).required('Phone Required'),
                    password: Yup.string().matches(
                     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                       "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
                    ).required('Password Required'),
                      email: Yup.string().email('Invalid email address').required('Email Required'),
                })}
                onSubmit={ (userForm, {setSubmitting }) => {
                  setTimeout(() => {
                     getUser()
                      .then(data => {
                        const userSameEmail = data.find(user => user.email === userForm.email);
                        if (userSameEmail) {
                             setSubmitting(false);
                            toast.warn(`Email Already exists!`);
                        } else {
                           postUser(userForm).then((result) => {
                              toast.success('User Registration have been done Successfully!');
                              setTimeout(() => {
                                navigate("/login");
                              }, 4000);
                          });
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
                    <label htmlFor="fname" className="form-label">First Name *</label>
                      <Field name="fname" type="fname" className="form-control" />
                        <ErrorMessage component="span" className="alert alert-danger py-1"  name="fname" />
                    </div>
                    <div className="form-outline flex-fill px-4">
                    <label htmlFor="lname" className="form-label">Last Name *</label>
                      <Field name="lname" type="lname" className="form-control" />
                        <ErrorMessage component="span" className="alert alert-danger py-1"  name="lname" />
                   </div>
                    </div>
                    <div className="d-flex flex-row align-items-center py-2">
                    <div className="form-outline flex-fill">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                      <Field name="email" type="email" className="form-control" />
                        <ErrorMessage component="span" className="alert alert-danger py-1"  name="email" />
                   </div>
                    </div>
                    <div className="d-flex flex-row align-items-center py-2">
                    <div className="form-outline flex-fill">
                    <label htmlFor="phone" className="form-label">Phone *</label>
                      <Field name="phone" type="text" className="form-control" />
                        <ErrorMessage component="span" className="alert alert-danger py-1"  name="phone" />
                   </div>
                  </div>
                  <div className="d-flex flex-row align-items-center py-2">
                    <div className="form-outline flex-fill">
                    <label htmlFor="password" className="form-label">Password *</label>
                    <Field name="password" type="password" className="form-control" />
                        <ErrorMessage name="password" component="span" className="alert alert-danger py-1" />
                   </div>
                    </div>
                    
                    <div className="d-flex flex-row align-items-center py-2 mb-2">
                    <div className="form-outline flex-fill">
                    <label htmlFor="role" className="form-label">Role *</label>
                    <Field name="role" as="select"  className="form-select">
                      <option value="Librarian">Librarian</option>
                      <option defaultValue={"Member"}>Member</option>
                    </Field>
                        {/* <ErrorMessage name="password" component="span" className="alert alert-danger py-1" /> */}
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
         <p className="col-sm-10 mx-4 py-4 mb-4 p-4"></p> 
      </div>
    </div>
  );
};

export default Signup;
