import { combineReducers } from "redux";
import ProductReducer from "./reducer";

export default combineReducers({
  Hotels: ProductReducer,
});
