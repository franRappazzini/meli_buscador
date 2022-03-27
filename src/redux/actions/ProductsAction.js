const GET_PRODUCTS = "GET_PRODUCTS";

export function get_products(search) {
  return (dispatch) => {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: GET_PRODUCTS, products: data.results }))
      .catch((err) => console.log("ERROR: ", err));
  };
}
