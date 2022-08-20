import { combineReducers } from 'redux';

export default combineReducers({
  replaceMe: () => 'hi there' // tricking redux thinking it has a valid reducer
});
