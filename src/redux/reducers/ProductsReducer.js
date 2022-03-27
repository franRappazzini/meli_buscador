const initial_state = [];

export function ProductsReducer(state = initial_state, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return action.products;
    default:
      return state;
  }
}
