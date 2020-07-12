import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch, withRouter } from "react-router-dom";
import Navbar from "../src/components/Navbar/navbar";
import Home from "./screen/Home/Home"
import aboutUs from "./screen/AboutUs/aboutUs";
import Portfolio from "./screen/Portfolio/Portfolio";
import Login from "./screen/Login/Login";
import Package from "./screen/Package/Package";
import Register from "./screen/Register/Register";
import AdminDashboard from "../src/screen/Admin/Dashboard/AdminDashboard"
import Members from "../src/screen/Admin/Members/Members";
import Cookie from "universal-cookie";
import { userKeepLogin,cookieChecker } from "../src/redux/actions/user";
import { connect } from "react-redux";

const cookieObj = new Cookie();
class App extends React.Component {
  componentDidMount() {
    let cookieResult = cookieObj.get("authData", { path: "/" });
    if (cookieResult) {
      this.props.keepLogin(cookieResult);
    } else {
      this.props.cookieChecker();
    }
  }
  
  renderAdminRoutes = () => {
    if (this.props.user.role === "admin") {
      return (
        <>
          <Route exact path="/admin/dashboard" component={AdminDashboard} />
         
          <Route exact path="/admin/members" component={Members} />
        </>
      );
    }
  };

  renderProtectedRoutes = () => {
    if (this.props.user.id) {
      return (
        <>
 
          <Route exact path="/history" component={History} />
   
        </>
      );
    }
  };
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={aboutUs} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/package" component={Package} />
          {this.renderAdminRoutes()}
        </Switch>
        <div style={{ height: "120px" }} />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  keepLogin: userKeepLogin,
  cookieChecker
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));

