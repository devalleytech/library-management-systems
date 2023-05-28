import React from "react";
import './users.css';

const Login = () => {
    return (
    <div className="row d-flex justify-content-center align-items-center mt-5">
      <div className="col-lg-4 col-xl-8">
        <div className="card text-black">
          <div className="card-body">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-10 col-xl-10 order-2 order-lg-1">
                <h3 className="text-center mb-4 mx-md-4 mt-4 bd-title">Login</h3>
                <form className="mx-1 mx-md-6">

                  <div className="d-flex flex-row align-items-center mb-2">
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" for="email">Email</label>
                      <input type="email" id="email" className="form-control" />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-2">
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" for="password">Password</label>
                      <input type="password" id="password" className="form-control" />
                    </div>
                  </div>
                  <div className="justify-content-center mt-4 m-2 py-2 mb-lg-4">
                      <button type="button" className="w-100 btn btn-primary px-2 mx-2">Login</button>
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