import React from "react";
//import { Petpeers } from '../model/Petpeers';
import {connect} from 'react-redux';
import { getSelDetail } from "../actions/indexAction";
import Mypetdetail from "./Mypetdetail";


class Mypet extends React.Component {
    constructor(props) {
        super(props);
    }

    getSelDetail(petId) {
        this.props.dispatch(getSelDetail(petId));
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
                        {this.props.myPets.map((val,index) => 
                            (sessionStorage.getItem('key-petpeers-userId') == val.userId) ? 
                            (<tr>
                                <td>{ this.numRows++ }</td>
                                <td><a href="javascript:void(0)" onClick={ () => this.getSelDetail(val.petId) }>{val.name}</a></td>
                                <td>{val.place}</td>
                                <td>{val.age}</td>
                             </tr>) : 
                            "" )
                        }
                    </tbody></table>
                    <Mypetdetail></Mypetdetail>
                </div>
            </div>
        )
    }    
}

// Maps state from store to props
const mapStateToProps = (state) => {
    return { myPets : state.getSelDetailReducer.petDetail }
};

export default connect(mapStateToProps) (Mypet);