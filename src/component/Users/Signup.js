import React, { useState } from "react";
import "./users.css";
import { FaUserPlus } from "react-icons/fa";
import userFormValidation from '../../common/validateUsers';

const Signup = () => {
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

  const handleOnFormSubmit = (event) => {
    event.preventDefault();
    setErrors(userFormValidation(userForm));
    if (
      !userForm.fname ||
      !userForm.lname ||
      !userForm.email ||
      !userForm.phone ||
      !userForm.password ||
      !userForm.role
    )
      return;
    console.log(userForm);
    setUserForm(initialUserFormState);
  };

  return (
    <div className="row d-flex justify-content-center align-items-center mt-3 mb-5">
      <div className="col-lg-4 col-xl-8">
        <div className="card text-black">
          <div className="card-body">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-10 col-xl-10 order-2 order-lg-1">
                <h3 className="text-center mb-4 mx-md-4 mt-2 bd-title">
                  <FaUserPlus className="userIcon" />
                  User Registration
                </h3>
                <form className="mx-1 mx-md-6" onSubmit={handleOnFormSubmit}>
                  <div className="row d-flex flex-row align-items-center mb-2">
                    <div className="form-outline flex-fill w-50 col-md-3">
                      <label className="form-label" htmlFor="fname">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="fname"
                        value={userForm.fname}
                        onChange={handleOnInputChange}
                        id="fname"
                        className="form-control"
                      />
                    </div>
                    <div className="form-outline flex-fill w-50 col-md-3">
                      <label className="form-label" htmlFor="lname">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lname"
                        value={userForm.lname}
                        onChange={handleOnInputChange}
                        id="lname"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-2">
                    <div className="form-outline flex-fill">
                      <label className="form-label" htmlFor="email">
                        Phone
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
                        <div class="alert alert-danger p-2" role="alert">
                          {errors.phone}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-2">
                    <div className="form-outline flex-fill">
                      <label className="form-label" htmlFor="email">
                        Email
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
                        <div class="alert alert-danger p-2" role="alert">
                          {errors.email}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-2">
                    <div className="form-outline flex-fill">
                      <label className="form-label" htmlFor="password">
                        Password
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
                        <div class="alert alert-danger p-1" role="alert">
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

                  <div className="form-check pt-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="terms"
                    />
                    <label className="form-check-label" htmlFor="terms">
                      I agree all statements in{" "}
                      <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div className="register-btn mt-2 py-4 w-100 ">
                    <button type="submit" className="w-100 btn btn-primary">
                      Register
                    </button>
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