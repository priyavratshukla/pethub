import React from 'react';
import { connect } from "react-redux";

class Mypetdetail extends React.Component {
    render() {
        var myPetTempDet = this.props.myPets.filter(petObj => petObj.petId == this.props.selectedMyPetId);
        if(!this.props.selectedMyPetId) {
            return (
                <div className="contact-detail-brd">Select a Pet Name from the list to see its details</div>
            );
        }
        return (
            <div className="contact-detail-brd">
                <h3>Pet Details for : {myPetTempDet[0].name}</h3>
                <p>Name : {myPetTempDet[0].name}</p>
                <p>Age : {myPetTempDet[0].age}</p>
                <p>Place : {myPetTempDet[0].place}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    //return { myPets : state.myPetReducer.petDetail, selectedMyPetId : state.getSelDetailReducer.selectedMyPetId }
    return { myPets : state.getSelDetailReducer.petDetail, selectedMyPetId : state.getSelDetailReducer.selectedMyPetId }
};

export default connect(mapStateToProps) (Mypetdetail);