import postsReducer from './postsReducer'
import { combineReducers } from 'redux';
import usersReducer from './usersReducer'

export default combineReducers({
  posts: postsReducer,
  users: usersReducer
});
