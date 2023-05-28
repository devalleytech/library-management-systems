import React, {useState} from "react";
import './users.css';
import {
  FaUserPlus,
} from 'react-icons/fa';

const Signup = () => {

  const initialUserFormState = { id: null, fname: "", lname: "", email:"", phone:"", password:"", role:"Member" };
  const [user, setUser] = useState(initialUserFormState);

  const handleInputChange = (event) => {
      const { name, value } = event.target;
      setUser({ ...user, [name]: value });
  };

  const handleOnFormSubmit = event => {
    event.preventDefault();
    if (!user.fname || !user.lname || !user.email || !user.phone || !user.password || !user.role) return;
    console.log(user);
    setUser(initialUserFormState);
  }

    return (
    <div className="row d-flex justify-content-center align-items-center mt-3 mb-5">
      <div className="col-lg-4 col-xl-8">
        <div className="card text-black">
          <div className="card-body">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-10 col-xl-10 order-2 order-lg-1">
                <h3 className="text-center mb-4 mx-md-4 mt-2 bd-title">
                <FaUserPlus className="userIcon" />User Registration</h3>
                <form className="mx-1 mx-md-6" onSubmit={handleOnFormSubmit}>
                  <div className="row d-flex flex-row align-items-center mb-2">
                    <div className="form-outline flex-fill w-50 col-md-3">
                    <label className="form-label" htmlFor="fname">First Name</label>
                      <input type="text" name="fname" value={user.fname} onChange={ handleInputChange} id="fname" className="form-control" />
                    </div>
                    <div className="form-outline flex-fill w-50 col-md-3">
                    <label className="form-label" htmlFor="lname">Last Name</label>
                      <input type="text" name="lname" value={user.lname} onChange={handleInputChange} id="lname" className="form-control" />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-2">
                    <div className="form-outline flex-fill">
                    <label className="form-label" htmlFor="email">Phone</label>
                      <input type="text" name="phone" value={user.phone}  onChange={handleInputChange} id="phone" className="form-control" />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-2">
                    <div className="form-outline flex-fill">
                    <label className="form-label" htmlFor="email">Email</label>
                      <input type="text" name="email" value={user.email}  onChange={handleInputChange} id="email" className="form-control" />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-2">
                    <div className="form-outline flex-fill">
                    <label className="form-label" htmlFor="password">Password</label>
                      <input type="password" value={user.password} name="password" onChange={handleInputChange} id="password" className="form-control" />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-2">
                    <div className="form-outline flex-fill mt-1">
                    <label className="form-label" htmlFor="password">Role</label>
                    <select className="form-select" name="role" aria-label="Role" onChange={handleInputChange}>
                      <option defaultValue={"Member"} >Librarian</option>
                      <option value={"Librarian"}>Member</option>
                   </select>
                    </div>
                  </div>

                  <div className="form-check pt-4">
                    <input className="form-check-input" type="checkbox" value="" id="terms" />
                    <label className="form-check-label" htmlFor="terms">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div className="register-btn mt-2 py-4 w-100 ">
                      <button type="submit" className="w-100 btn btn-primary">Register</button>
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

export default Signup;