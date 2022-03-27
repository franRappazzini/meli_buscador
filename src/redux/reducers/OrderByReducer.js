const initial_state = "";

export function OrderByReducer(state = initial_state, action) {
  switch (action.type) {
    case "ORDER_BY":
      return action.orderBy;
    default:
      return state;
  }
}
