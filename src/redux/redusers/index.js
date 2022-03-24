import { combineReducers } from "redux";
import { productReduser } from "./productReduser";

const redusers = combineReducers({
  allProducts: productReduser,
});

export default redusers;
