import { combineReducers } from "redux";
import { productsReducer, selectedProductReduser } from "./productReduser";

const redusers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductReduser,
});

export default redusers;
