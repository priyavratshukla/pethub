import React from "react";

class Registration extends React.Component {
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
        fields['con_pwd'] = "";

        this.setState({fields:fields});
    }

    submitRegistrationForm(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        if(this.validateForm()) {
            let errors = {};
            if (data.get('username') === sessionStorage.getItem('key-petpeers-username')) {
                errors['username'] = "Username already taken";
                
                this.setState({errors:errors});
            } else {
                let fields = {};
                fields['username'] = "";
                fields['pwd'] = "";
                fields['con_pwd'] = "";

                this.setState({fields:fields});
                //alert('Form Submitted');

                
                //alert(data.get('username'));
                sessionStorage.setItem('key-petpeers-username', data.get('username'));
                sessionStorage.setItem('key-petpeers-pwd', data.get('pwd'));

                this.props.history.push('/sucessregistration');

                /*var newState = this.state.userdata.slice();
                newState.push({
                    "username" : data.get('username'),
                    "email" : data.get('email')
                });
                this.setState({userdata : newState});*/
                //event.target.reset();
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

        if(!fields['con_pwd']) {
            formIsValid = false;
            errors['con_pwd'] = "Please enter confirm password";
        }

        if ((typeof fields["pwd"] !== "undefined") && (typeof fields["con_pwd"] !== "undefined") && (fields["pwd"] !== fields["con_pwd"])) {
            formIsValid = false;
            errors['con_pwd'] = "Password and confirm password are not same";
        }
        this.setState({errors:errors});
        return formIsValid;
    }

    render() {
        return (
            <div>
                <form method="post" name="userRegistrationForm" onSubmit={this.submitRegistrationForm}>
                    <div className="maincontainer">
                        <h2>User Registration</h2>
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
                        <div>
                            <label htmlFor="psw"><b>Confirm Password</b></label>
                            <input type="password" placeholder="Enter Password" name="con_pwd" value={this.state.fields.con_pwd} onChange={this.handleChange} className="generalInput" />
                            <div className="errormsg">{this.state.errors.con_pwd}</div>
                        </div>    
                        <button type="submit">Submit</button><button type="button" className="cancelbtn" onClick={this.resetForm}>Reset</button>
                    </div>
                </form>
            </div>
        )
    }    
}

export default Registration;