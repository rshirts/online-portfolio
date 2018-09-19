import * as actionTypes from '../actions/actionTypes';

const initalState = {
  person : {
    firstName : 'Randee',
    lastName  : 'Shirts',
    titles    : [
      'Software Engineer',
      'Developer',
      'Designer'
    ]
  }
};

const reducer = (state = initalState, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default reducer;
