import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
//import { Petpeers } from '../model/Petpeers';
import Advancesearch from './Advancesearch';
import Pettablehead from './Pettablehead';
import Pettablerow from './Pettablerow';

class Petlist extends React.Component {
    constructor(props) {
        super(props);
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


    render() {        
        return (
            <div>
                <div className="maincontainer">
                    <h2>All Pet List</h2>
                    <span><a href="javascript:void(0);" onClick={this.togglePopup.bind(this)}>Advance Search</a></span>
                </div>
                <div className="container">
                    <table border="1" width="80%" cellSpacing="0">
                        <thead>
                            <Pettablehead />
                        </thead>
                        <tbody>
                            {this.props.allPets.map((val,index) => <Pettablerow data={val} tableIndex={index} /> ) }
                        </tbody>
                    </table>
                      
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



//Map State from store to props
const mapStateToProps = (state) => {
    return { allPets : state.getSelDetailReducer.petDetail }
};

export default connect(mapStateToProps) (Petlist);


/*mapDispatchToProps: It connects redux actions to react props
With mapDispatchToProps every action creator wrapped into a dispatch call so they may be invoked directly, will be merged into the component’s props.
function mapStateToProps(state) {
  return { todos: state.todos }
}
function mapDispatchToProps(dispatch) {
  return { addTodo: bindActionCreators(addTodo, dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todos);*/


