import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Redirect, withRouter, Switch } from "react-router-dom";
import Home from './components/Home';
import Pagenotfound from './components/Pagenotfound';
import Registration from './components/Registration';
import Sucessregistration from './components/Sucessregistration';
import Login from './components/Login';
import Myaccount from './components/Myaccount';
import Addpet from './components/Addpet';
import Mypet from './components/Mypet';
import Petdetail from './components/Petdetail';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="header">
          <h1>Pet Peers</h1>
          <div className="nav">
              <AuthNavLinks />
          </div>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/sucessregistration" component={Sucessregistration} />
            <PrivateRoute exact path="/myaccount" component={Myaccount} />
            <PrivateRoute exact path="/addpet" component={Addpet} />
            <PrivateRoute exact path="/mypet" component={Mypet} />
            <Route exact path={`/myaccount/:petId`} component={Petdetail}/>
            <Route path="**" component={Pagenotfound} />
          </Switch>  
        </div>
      </Router>
    );
  }
}


const fakeAuth = {
  signout(cb) {
    sessionStorage.removeItem('key-petpeers-userId');
    setTimeout(cb, 100);
  }
};

const AuthNavLinks = withRouter(
  ({ history }) =>
  (sessionStorage.getItem('key-petpeers-userId') && (sessionStorage.getItem('key-petpeers-userId') !== "undefined")) ? (
        <ul>
          <li>Welcome {sessionStorage.getItem('key-petpeers-username')}</li>
          <li><Link to="myaccount">My Account</Link></li>
          <li><Link to="mypet">My Pets</Link></li>
          <li><Link to="addpet">Add Pet</Link></li>
          <li><a onClick={() => { fakeAuth.signout(() => history.push("/")); }} > Sign out </a></li>
        </ul>  
    ) : ( 
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="registration">Registration</Link></li>
        <li><Link to="login">Login</Link></li>
      </ul>
     )
);

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        (sessionStorage.getItem('key-petpeers-userId') && (sessionStorage.getItem('key-petpeers-userId') !== "undefined")) ? (
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

/*class Login extends React.Component {
  state = { redirectToReferrer: false };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}*/

export default App;