import React from 'react';
import { connect } from 'react-redux';
import * as indexActions from '../actions/indexAction';

class Myaccount extends React.Component{
  constructor(props){
    super(props);
  }

  submitBook(input){
    this.props.createBook(input.title);
  }

  render(){
    let titleInput;
    return(
      <div>
        <div>
          <h3>Books Form</h3>
          <form onSubmit={e => {
            e.preventDefault();
            var input = {title: titleInput.value};
            this.submitBook(input);
            e.target.reset();
          }}>
            <input type="text" name="title" ref={node => titleInput = node}/>
            <input type="submit" />
          </form>
        </div>
        <div>
          <h3>Books</h3>
          <ul>
            {this.props.books.map((val, index) => <li key={index}>{val}</li> )}
          </ul>
        </div>
     </div>
    )
  }
}

// Maps state from store to props
const mapStateToProps = (state) => {
  return {
    // You can now say this.props.books
    books: state.bookReducer.bookList
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.createBook
    createBook: book => dispatch(indexActions.createBook(book))
  }
};

// Use connect to put them together
export default connect(mapStateToProps,mapDispatchToProps)(Myaccount);
