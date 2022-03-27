import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "@reduxjs/toolkit";

import { ProductsReducer } from "../reducers/ProductsReducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
  products: ProductsReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
