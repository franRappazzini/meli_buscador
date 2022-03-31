const initial_state = {
  products: [],
  filters: [],
  search: "",
  cant_products: 0,
};

export function ProductsReducer(state = initial_state, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        products: action.products,
        filters: action.filters,
        search: action.search,
        cant_products: action.cant_products,
      };
    default:
      return state;
  }
}
