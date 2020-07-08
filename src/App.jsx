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
import Members from "./screen/Admin/Members/Members";

class App extends React.Component {
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
          <Route exact path="/admin/adminDashboard" component={AdminDashboard} />
          <Route exact path="/admin/members" component={Members} />
        </Switch>
        <div style={{ height: "120px" }} />
      </>
    );
  }
}
export default App;
