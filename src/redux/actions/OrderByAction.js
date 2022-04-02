const ORDER_BY = "ORDER_BY";

export function order_by(orderBy) {
  console.log("order_by", orderBy);
  return (dispatch) => {
    dispatch({ type: ORDER_BY, orderBy: orderBy });
  };
}
