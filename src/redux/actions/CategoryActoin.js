const GET_CATEGORIES = "GET_CATEGORIES";

export function get_category(id_cat = null) {
  console.log("ID_CAT", id_cat);
  return (dispatch) => {
    id_cat
      ? fetch(`https://api.mercadolibre.com/categories/${id_cat}`)
          .then((res) => res.json())
          .then((data) => {
            console.log("categoriasssss");
            dispatch({ type: GET_CATEGORIES, categories: data.path_from_root });
          })
          .catch((err) => console.log("ERROR:", err))
      : dispatch({ type: GET_CATEGORIES, categories: [] });
  };
}
