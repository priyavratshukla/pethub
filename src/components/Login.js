import React from "react";
import { Link } from 'react-router-dom'

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            fields : {},
            errors : {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.submitRegistrationForm = this.submitRegistrationForm.bind(this);
    }

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({fields});
        console.log(this.state.fields);
    }

    resetForm() {
        let fields = {};
        fields['username'] = "";
        fields['pwd'] = "";

        this.setState({fields:fields});
    }

    submitRegistrationForm(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        if(this.validateForm()) {
            let errors = {};
            if (data.get('username') !== sessionStorage.getItem('key-petpeers-username') || data.get('pwd') !== sessionStorage.getItem('key-petpeers-pwd')) {
                errors['pwd'] = "Username or password is wrong!!";
                this.setState({errors:errors});
            } else {
                sessionStorage.setItem('key-petpeers-userId', '1');

                let { from } = this.props.location.state || { from: { pathname: "/myaccount" } };
                //return <Redirect to={from} />;

                this.props.history.push(from);
            }   
        }
    }

    validateForm() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if(!fields['username']) {
            formIsValid = false;
            errors['username'] = "Please enter username";
        }

        if(!fields['pwd']) {
            formIsValid = false;
            errors['pwd'] = "Please enter password";
        }

        this.setState({errors:errors});
        return formIsValid;
    }

    render() {
        return (
            <div>
                <form method="post" name="userRegistrationForm" onSubmit={this.submitRegistrationForm}>
                    <div className="maincontainer">
                        <h2>Sign In</h2>
                    </div>
                    <div className="container">
                        <div>
                            <label htmlFor="uname"><b>Username</b></label>
                            <input type="text" placeholder="Enter Username" name="username" value={this.state.fields.username} onChange={this.handleChange} className="generalInput" />
                            <div className="errormsg">{this.state.errors.username}</div>
                        </div>
                        <div>
                            <label htmlFor="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="pwd" value={this.state.fields.pwd} onChange={this.handleChange} className="generalInput" />
                            <div className="errormsg">{this.state.errors.pwd}</div>
                        </div>    
                        <button type="submit">Sign In</button><button type="button" className="cancelbtn" onClick={this.resetForm}>Reset</button>
                    </div>
                    <div className="maincontainer">
                        If not a member yet, Please <Link to="/registration">Register</Link>
                    </div>
                </form>
            </div>
        )
    }    
}

export default Login;