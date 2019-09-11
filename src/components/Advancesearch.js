import React from "react";
import { Petpeers } from '../model/Petpeers';

class Advancesearch extends React.Component {
    constructor() {
        super();
        this.state = {
            fields : {},
            petDetailST : Petpeers.petDetail
        }
        this.handleChange = this.handleChange.bind(this);
        this.searchPet = this.searchPet.bind(this);
    }

    searchPet(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        
        var newState = Petpeers.petDetail.slice();
        var petTempDet = newState.filter(petObj => petObj.age > data.get('age'));
        
        this.setState({petDetailST : petTempDet});
    }

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({fields});
        console.log(this.state.fields);
    }

    render() {
        this.numRows = 1;  
        return (
            <div className='popup'>
            <div className='popup_inner'>
                <div>
                    <div className="maincontainer">
                        <h2>Advance Search</h2>
                    </div>
                    <form method="post" name="userRegistrationForm" onSubmit={this.searchPet}>
                    <div>
                        Pet Name : <input type="text" name="petname" value={this.state.fields.petname} onChange={this.handleChange} disabled /> &nbsp; 
                        Age : <input type="text" name="age" value={this.state.fields.age} onChange={this.handleChange} /> &nbsp; 
                        Place : <input type="text" name="place" value={this.state.fields.place} onChange={this.handleChange} disabled />
                    </div>
                    <div><button type="submit" className="searchbtn" >Search</button></div>
                    </form>
                    <hr />
                    <div className="container">
                        <table border="1" width="80%" cellSpacing="0"><tbody>
                            <tr>
                                <td>#</td>
                                <td>Pet Name (Up/Down)</td>
                                <td>Place</td>
                                <td>Age</td>
                            </tr>
                            {this.state.petDetailST.map((val,index) => 
                                <tr>
                                    <td>{ this.numRows++ }</td>
                                    <td>{val.name}</td>
                                    <td>{val.place}</td>
                                    <td>{val.age}</td>
                                </tr>)  
                            }
                        </tbody></table>
                        
                    </div>
                </div>
                <button className="searchclosebutton" onClick={this.props.closePopup}>X</button>
            </div>
            </div>
        );
    }
}

export default Advancesearch;