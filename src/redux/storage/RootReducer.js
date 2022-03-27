import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "@reduxjs/toolkit";

import { OrderByReducer } from "../reducers/OrderByReducer";
import { ProductsReducer } from "../reducers/ProductsReducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
  products: ProductsReducer,
  orderBy: OrderByReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
