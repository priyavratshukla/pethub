import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
// import { Petpeers } from '../model/Petpeers';

/*const Petdetail = ({ match }) => {
    //const { match } = this.props // coming from React Router.
    console.log(match.path) // /topics/:topicId/:subId
    console.log(match.url) // /topics/react-router/url-parameters
    var petTempDet = Petpeers.petDetail.filter(petObj => petObj.petId == match.params.petId);
    return (
        <div>
            <h1>Pet Detail</h1> <b><Link to="/pets"> Back</Link></b>
            <p>Pet Id : {match.params.petId}</p>
            <p>Name : {petTempDet[0].name}</p>
            <p>Place : {petTempDet[0].place}</p>
            <p>Age : {petTempDet[0].age}</p>
        </div>
    );
};*/

class Petdetail extends React.Component { 
    render() {
     //  console.log(this.props.allPets);
     var petTempDet = this.props.allPets.filter(petObj => petObj.petId == this.props.match.params.petId);   
     return (
        <div>
            <h1>Pet Detail</h1> <b><Link to="/pets"> Back</Link></b>
            <p>Pet Id : {this.props.match.params.petId}</p>
            <p>Name : {petTempDet[0].name}</p>
            <p>Place : {petTempDet[0].place}</p>
            <p>Age : {petTempDet[0].age}</p>
        </div>
        // <div>
        //     <h1>Pet Detail</h1>
        //     <p>Pet Id : {this.props.match.params.petId}</p>
        // </div>
      );
     }
}

//Map State from store to props
const mapStateToProps = (state) => {
    return { allPets : state.getSelDetailReducer.petDetail }
};

export default connect(mapStateToProps) (Petdetail);

// export default Petdetail;