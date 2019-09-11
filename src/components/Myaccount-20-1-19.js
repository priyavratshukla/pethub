import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
//import { Petpeers } from '../model/Petpeers';
import Advancesearch from './Advancesearch';

//Map State from store to props
const mapStateToProps = (state) => {
    return { petDetail : state.myPetReducer.petDetail }
};


class Myaccount extends React.Component {
    constructor() {
        super();
        this.state = {
            showPopup: false
        };
  
        //this.buyPet = this.buyPet.bind(this);
    }

    togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
    }

    buyPet(event) {
        event.preventDefault();
        //alert(event.target.value);
        /*--Use Axios to send data to server--*/
        alert("Pet Sold");
        //alert(event.target.value);
        this.props.dispatch(buyThisPet(event.target.value,sessionStorage.getItem('key-petpeers-userId')));
    }

    render() {
        this.numRows = 1;        
        return (
            <div>
                <div className="maincontainer">
                    <h2>All Pet List</h2>
                    <span><a href="javascript:void(0);" onClick={this.togglePopup.bind(this)}>Advance Search</a></span>
                </div>
                <div className="container">
                    <table border="1" width="80%" cellSpacing="0"><tbody>
                        <tr>
                            <td>#</td>
                            <td>Pet Name (Up/Down)</td>
                            <td>Place</td>
                            <td>Age</td>
                            <td>Action</td>
                        </tr>
                        {this.props.petDetail.map((val,index) => 
                            <tr>
                                <td>{ this.numRows++ }</td>
                                <td><Link to={`/myaccount/${val.petId}`}>{val.name}</Link></td>
                                <td>{val.place}</td>
                                <td>{val.age}</td>
                                <td>
                                    {
                                        (sessionStorage.getItem('key-petpeers-userId') == val.userId) ? 
                                        (<button className="disablebutton">Sold</button>) :  
                                        (<button type="button" value={val.petId} className="buybtn" onClick={this.buyPet}>Buy</button>)
                                    }
                                </td>
                            </tr>)  
                        }
                    </tbody></table>
                      
                    {this.state.showPopup ? 
                          <Advancesearch text='Close Me' closePopup={this.togglePopup.bind(this)} />
                            : null
                    }
                    
                    <div className="paging">
                        Prev 1 2 3 Next
                    </div>
                </div>
            </div>
        )
    }    
}

export default connect(mapStateToProps) (Myaccount);