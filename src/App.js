import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";

import AddTutorial from "./components/add-tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
import Confirm from "./components/confrimDetails";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand bg-dark">
          <a href="/tutorials" className="navbar-brand">
            myFirstTask
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Employees
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add Employee
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <h2>React Firebase Database CRUD</h2>
          <Switch>
            <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
            <Route exact path="/add" component={AddTutorial} />
            <Route exact path="/confirm" component={Confirm} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;