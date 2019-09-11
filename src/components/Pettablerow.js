import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import { buyThisPet } from "../actions/indexAction";

class Pettablerow extends React.Component {
    constructor(props) {
        super(props);
    }

    buyPet(indexId,currUserId) {
        //event.preventDefault();
        //alert(event.target.value);
        /*--Use Axios to send data to server--*/
        alert("Pet Sold");
        //alert(event.target.value);
        this.props.dispatch(buyThisPet(indexId,currUserId));
    }

    render() {
        return (
            <tr>
                <td>{ (this.props.tableIndex + 1) }</td>
                <td><Link to={`/pets/${this.props.data.petId}`}>{this.props.data.name}</Link></td>
                <td>{this.props.data.place}</td>
                <td>{this.props.data.age}</td>
                <td>{this.props.data.userId}</td>
                <td>
                    {
                      (sessionStorage.getItem('key-petpeers-userId') == this.props.data.userId) ? 
                      (<button className="disablebutton">Sold</button>) :  
                      (<button type="button" value={this.props.tableIndex} className="buybtn" onClick={ () => this.buyPet(this.props.tableIndex,sessionStorage.getItem('key-petpeers-userId')) }>Buy</button>)
                    }
                </td>
            </tr>
        );
    }
}

export default connect() (Pettablerow);