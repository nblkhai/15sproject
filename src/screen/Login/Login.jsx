import React, { Component } from "react";

class Login extends React.Component {
  render() {
    return (
      <div className="container">
        <form>
          <h3>Sign In</h3>

          <div className="form-group">
            <label>Username</label>
            <input
              type="username"
              className="form-control"
              placeholder="Enter Username"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
            />
          </div>
          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input type="check-box" className="custom-control-input" id="" />
              <label className="custom-control-label">Show Password</label>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Sign In
            </button>

            <p className="forgot-password text-right">
              Forgot <a href="#">password? </a>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
