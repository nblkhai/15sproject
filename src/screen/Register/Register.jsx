import React from "react";
import "../Login/Login.css";
import "../Home/Home.css"


class Register extends React.Component {
  render() {
    return (
      
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="login_part_form">
                <div className="login_part_form_iner">
                  <h3>Registration Form</h3>
                  <form
                    className="row contact_form"
                    action="#"
                    method="post"
                    novalidate="novalidate"
                  >
                    <div className="col-md-12 form-group p_star">
                      <h5>First Name</h5>
                      <input
                        type="text"
                        className="form-control"
                        id="firstname"
                        name="name"
                        value=""
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col-md-12 form-group p_star">
                      <h5>Last Name</h5>
                      <input
                        type="text"
                        className="form-control"
                        id="lastname"
                        name="name"
                        value=""
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="col-md-12 form-group p_star">
                      <h5>Username</h5>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value=""
                        placeholder="Username"
                      />
                    </div>
                    <div className="col-md-12 form-group p_star">
                      <h5>Password</h5>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value=""
                        placeholder="Password"
                      />
                    </div>
                    <div className="col-md-12 form-group p_star">
                      <h5>Email</h5>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        value=""
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-md-12 form-group p_star">
                      <h5>Phone Number</h5>
                      <input
                        type="text"
                        className="form-control"
                        id="phonenumber"
                        name="number"
                        value=""
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <a href="login.html" className="btn_3">
                        Create an Account
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
   
    );
  }
}
export default Register;
