import { combineReducers } from 'redux';
import { GET_SEL_DETAIL, BUY_THIS_PET, CREATE_BOOK, CREATE_PET } from '../actions/indexAction';
import { Petpeers } from '../model/Petpeers';

const initialState = {
    petDetail : Petpeers.petDetail,
    selectedMyPetId : "",
    bookList : []
};

const myPetReducer = (state = initialState,action = {}) => {
    switch(action.type) {
        //case 1 : 
            //return state;
        default :
            return state;    
    }
};

const getSelDetailReducer = (state=initialState,action={}) => {
    switch(action.type) {
        case GET_SEL_DETAIL :
            var newState = {
                ...state,
                selectedMyPetId : action.payload
            }
            return newState;

        case BUY_THIS_PET :
            //console.log(state);
            //alert(action.payload);
            
            /*var newState = {
                ...state
            }*/    

            /*var newState = {
                ...state,
                petDetail : [
                    {
                        "petId" : 1,
                        "userId" : 1,
                        "name" : "p1",
                        "age" : 10,
                        "place" : "AH"
                    },
                    {
                        "petId" : 2,
                        "userId" : 1,
                        "name" : "p2",
                        "age" : 20,
                        "place" : "BH"
                    },
                    {
                        "petId" : 3,
                        "userId" : 1,
                        "name" : "p3",
                        "age" : 30,
                        "place" : "CH"
                    },
                    {
                        "petId" : 4,
                        "userId" : 1,
                        "name" : "p4",
                        "age" : 40,
                        "place" : "DH"
                    },
                    {
                        "petId" : 5,
                        "userId" : 1,
                        "name" : "p5",
                        "age" : 50,
                        "place" : "EH"
                    },
                    {
                        "petId" : 6,
                        "userId" : 1,
                        "name" : "p6",
                        "age" : 60,
                        "place" : "FH"
                    }
                ]
            }*/

            var newState = {
                ...state,
                petDetail : [
                    ...state.petDetail.slice(0,action.payload),
                    {
                        ...state.petDetail[action.payload],
                        ["userId"] : action.currUserId
                    },
                    ...state.petDetail.slice(action.payload + 1)
                ]
            };

            //console.log(newState);
            return newState;  

        case CREATE_PET:
            return {
              ...state,
              petDetail: [ ...state.petDetail, action.payload],
            };

        default :
            return state;                 
    }
    //return state;
};


const bookReducer = (state=initialState, action = {}) => {
//const bookReducer = (state=[], action = {}) => {
  switch (action.type){
    // Check if action dispatched is
    // CREATE_BOOK and act on that
    case CREATE_BOOK:
        return {
          ...state,
          bookList: [ ...state.bookList, action.payload],
        };
    default:
          return state;
  }
};


const rootReducer = combineReducers({myPetReducer, getSelDetailReducer, bookReducer});

export default rootReducer;