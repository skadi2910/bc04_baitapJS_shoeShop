import { shoeReducer } from "./shoeReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  shoeReducer,
});
