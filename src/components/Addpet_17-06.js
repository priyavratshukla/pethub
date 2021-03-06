import React from "react";

class Addpet extends React.Component {
    constructor() {
        super();
        this.state = {
            fields : {},
            errors : {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({fields});
        console.log(this.state.fields);
    }

    resetForm() {
        let fields = {};
        fields['petname'] = "";
        fields['age'] = "";
        fields['place'] = "";

        this.setState({fields:fields});
    }

    submitForm(event) {
        event.preventDefault();
        //const formData = new FormData(event.target);
        if(this.validateForm()) {
            //alert(formData.get('petname'));
            
            //formData.append('name', 'ABC');   //append the values with key, value pair
            //formData.append('age', 20);

            /*const config = {     
                headers: { 'content-type': 'multipart/form-data' }
            };
            axios.post(url,formData, config)
                .then(response => {
                        console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });*/
            

            /*let fields = {};
            fields['petname'] = "";
            fields['age'] = "";
            fields['place'] = "";
            this.setState({fields:fields});*/

            alert('Form Submitted');

            this.props.history.push('/mypet');

            //event.target.reset();
               
        }
    }

    validateForm() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if(!fields['petname']) {
            formIsValid = false;
            errors['petname'] = "Please enter petname";
        }

        if(!fields['age']) {
            formIsValid = false;
            errors['age'] = "Please enter age";
        }

        if(!fields['place']) {
            formIsValid = false;
            errors['place'] = "Please enter place";
        }

        this.setState({errors:errors});
        return formIsValid;
    }

    render() {
        return (
            <div>
                <form method="post" name="petEntryForm" onSubmit={this.submitForm}>
                    <div className="maincontainer">
                        <h2>Add Pet Information</h2>
                    </div>
                    <div className="container">
                        <div>
                            <label htmlFor="uname"><b>Name</b></label>
                            <input type="text" placeholder="Enter Name" name="petname" value={this.state.fields.petname} onChange={this.handleChange} className="generalInput" />
                            <div className="errormsg">{this.state.errors.petname}</div>
                        </div>
                        <div>
                            <label htmlFor="psw"><b>Age</b></label>
                            <input type="text" placeholder="Enter Age" name="age" value={this.state.fields.age} onChange={this.handleChange} className="generalInput" />
                            <div className="errormsg">{this.state.errors.age}</div>
                        </div>    
                        <div>
                            <label htmlFor="psw"><b>Place</b></label>
                            <input type="text" placeholder="Enter Place" name="place" value={this.state.fields.place} onChange={this.handleChange} className="generalInput" />
                            <div className="errormsg">{this.state.errors.place}</div>
                        </div>    
                        <button type="submit">Submit</button><button type="button" className="cancelbtn" onClick={this.resetForm}>Reset</button>
                    </div>
                </form>
            </div>
        )
    }    
}

export default Addpet;