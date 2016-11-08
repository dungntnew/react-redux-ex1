import {combineReducers} from 'redux';
import userReducer from './reducer-user';
import activeUserReducer from './reducer-active-user';

const allReducers = combineReducers({
  users: userReducer,
  active: activeUserReducer, 
})

export default allReducers
