const initial_state = "";

export function FilterReducer(state = initial_state, action) {
  switch (action.type) {
    case "POST_FILTERS":
      return action.filters;
    default:
      return state;
  }
}
