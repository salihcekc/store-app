import { combineReducers } from "redux";
import AddItemReducer from './AddItemReducer'
import getUserNameReducer from "./getUserNameReducer";

const rootReducer = combineReducers({
  AddItemReducer,
  getUserNameReducer,
});

export default rootReducer;
