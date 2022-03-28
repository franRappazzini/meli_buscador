const POST_FILTERS = "POST_FILTERS";

export function post_filters(filters) {
  return {
    type: POST_FILTERS,
    filters,
  };
}
