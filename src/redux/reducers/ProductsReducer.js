const initial_state = { products: [], filters: [] };

export function ProductsReducer(state = initial_state, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        products: action.products,
        filters: action.filters,
      };
    default:
      return state;
  }
}
