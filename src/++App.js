import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Redirect, withRouter, Switch } from "react-router-dom";
import Home from './components/Home';
import Pagenotfound from './components/Pagenotfound';
import Registration from './components/Registration';
import Sucessregistration from './components/Sucessregistration';
import Login from './components/Login';
import Myaccount from './components/Myaccount';
//import { PrivateRoute } from './components/PrivateRoute';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="header">
            <h1>Pet Peers</h1>
            <div className="nav">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="registration">Registration</Link></li>
                <li><Link to="login">Login</Link></li>
                <li><Link to="myaccount">My Account</Link></li>
                <li><Link to="myaccount">My Pets</Link></li>
                <li><Link to="myaccount">Add Pet</Link></li>
                <li><Link to="myaccount">Logout</Link></li>
              </ul>
            </div>
            <hr />
            <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/myaccount" component={Myaccount} />
              <Route exact path="/registration" component={Registration} />
              <Route exact path="/sucessregistration" component={Sucessregistration} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/myaccount" component={Myaccount} />
              <Route path="**" component={Pagenotfound} />
            </Switch>  
            </div> 
          </div>
        </Router>
      </div>
    );
  }
}

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        (1 != 1) ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export default App;
