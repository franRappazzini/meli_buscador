const initial_state = [];

export function CategoryReducer(state = initial_state, action) {
  switch (action.type) {
    case "GET_CATEGORIES":
      return action.categories;
    default:
      return state;
  }
}
