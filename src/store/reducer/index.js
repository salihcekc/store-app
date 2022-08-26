import {combineReducers} from 'redux';
import AddItemReducer from './AddItemReducer';
import getUserNameReducer from './getUserNameReducer';
import DetailItemReducer from './DetailItemReducer';

const rootReducer = combineReducers({
  AddItemReducer,
  getUserNameReducer,
  DetailItemReducer,
});

export default rootReducer;
