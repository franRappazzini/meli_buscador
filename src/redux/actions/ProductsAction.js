const GET_PRODUCTS = "GET_PRODUCTS";

export function get_products(search, order_by) {
  return (dispatch) => {
    fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${search}&sort=${order_by}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: GET_PRODUCTS, products: data.results });
      })
      .catch((err) => console.log("ERROR: ", err));
  };
}
