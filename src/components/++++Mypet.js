import React from "react";
import { Petpeers } from '../model/Petpeers';

class Mypet extends React.Component {
    constructor() {
        super();
        this.state = {
            userdata : [ {
                "username" : "1",
                "email" : "1email"
            },
            {
                "username" : "2",
                "email" : "2email"
            } ]
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        //alert(data.get('username'));
        var newState = this.state.userdata.slice();
        newState.push({
            "username" : data.get('username'),
            "email" : data.get('email')
        });
        this.setState({userdata : newState});
        event.target.reset();
    }

    render() {
        this.numRows = 1;
        return (
            <div>
                <div className="maincontainer">
                    <h2>My Pet List</h2>
                </div>
                <div className="container">
                    <table border="1" width="50%" cellSpacing="0"><tbody>
                        <tr>
                            <td>#</td>
                            <td>Pet Name</td>
                            <td>Place</td>
                            <td>Age</td>
                        </tr>
                        {Petpeers.petDetail.map((val,index) => 
                            (sessionStorage.getItem('key-petpeers-userId') == val.userId) ? 
                            (<tr><td>{ this.numRows++ }</td><td>{val.name}</td><td>{val.place}</td><td>{val.age}</td></tr>) : 
                            "" )
                        }
                    </tbody></table>
                </div>
            </div>
        )
    }    
}

export default Mypet;