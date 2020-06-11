import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch, withRouter } from "react-router-dom";
import Navbar from "../src/components/Navbar/navbar";
import Home from "../src/screen/Home"


class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <div style={{ height: "120px" }} />
      </>
    );
  }
}
export default App;
