const GET_PRODUCTS = "GET_PRODUCTS";

export function get_products(search, order_by, filters) {
  function order_filters() {
    let text = "";

    // filters &&
    for (let i = 0; i < filters.length; i++) {
      text += `&${filters[i].id}=${filters[i].value}`;
    }

    console.log(text);
    return text;
  }

  return (dispatch) => {
    // console.log(filters);
    // console.log(
    //   `https://api.mercadolibre.com/sites/MLA/search?q=${search}&sort=${order_by}${order_filters()}`
    // );
    fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${search}&sort=${order_by}${order_filters()}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({
          type: GET_PRODUCTS,
          products: data.results,
          filters: data.available_filters,
        });
      })
      .catch((err) => console.log("ERROR: ", err));
  };
}
