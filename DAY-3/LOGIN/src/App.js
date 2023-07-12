import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import UserLogin from "./pages/UserLogin";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="App">
          <div className="appAside" />
          <div className="appForm">
            <div className="pageSwitcher">
              <NavLink
                to="/sign-in"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                STUDENT
              </NavLink>
              <NavLink
                exact
                to="/"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                ADMIN
              </NavLink>
            </div>
            
             <h1>LOGIN</h1>
            <div className="formTitle">
              <NavLink
                to="/sign-in"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                STUDENT
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                ADMIN
              </NavLink>
            </div>

            <Route exact path="/" component={AdminLogin} />
            <Route path="/sign-in" component={UserLogin} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
