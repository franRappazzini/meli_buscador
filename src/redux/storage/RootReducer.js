import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "@reduxjs/toolkit";

import { CategoryReducer } from "../reducers/CategoryReducer";
import { FilterReducer } from "../reducers/FiltersReducer";
import { OrderByReducer } from "../reducers/OrderByReducer";
import { ProductsReducer } from "../reducers/ProductsReducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
  products: ProductsReducer,
  orderBy: OrderByReducer,
  filters: FilterReducer,
  categories: CategoryReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
