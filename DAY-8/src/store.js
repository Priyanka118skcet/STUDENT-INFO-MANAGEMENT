import { createStore } from 'redux';

// Define initial state
const initialState = {
  name: '',
  contactNumber: '',
  email: '',
  message: '',
};

// Define reducer function
const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return { ...state, name: action.payload };
    case 'UPDATE_CONTACT_NUMBER':
      return { ...state, contactNumber: action.payload };
    case 'UPDATE_EMAIL':
      return { ...state, email: action.payload };
    case 'UPDATE_MESSAGE':
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

// Create store
const store = createStore(formReducer);

export default store;