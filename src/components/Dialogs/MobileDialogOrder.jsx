import "./MobileDialogOrder.css";

import { useDispatch, useSelector } from "react-redux";

import { BsArrowLeft } from "react-icons/bs";
import React from "react";
import { order_by } from "../../redux/actions/OrderByAction";

function MobileDialogOrder({ openDialog, setOpenDialog }) {
  const orderBy = useSelector((state) => state.orderBy);
  const dispatch = useDispatch();

  function handleClose() {
    setOpenDialog(false);
  }

  function handleClick(order) {
    dispatch(order_by(order));
    handleClose();
  }

  function verifyOrder(order) {
    if (orderBy === order) {
      return "selector_order-active";
    } else {
      return "selector_order";
    }
  }

  return (
    <section className={`dialog_filters ${!openDialog && "open_false"}`}>
      <BsArrowLeft
        onClick={handleClose}
        color="#3483fa"
        size={30}
        className="arrow_icon"
      />

      <h3>Ordenar por</h3>

      <ul>
        <li onClick={() => handleClick("relevance")} className="select_order">
          <div className={verifyOrder("relevance")}></div>
          Mas relevantes
        </li>
        <li onClick={() => handleClick("price_asc")} className="select_order">
          <div className={verifyOrder("price_asc")}></div>
          Menor precio
        </li>
        <li onClick={() => handleClick("price_desc")} className="select_order">
          <div className={verifyOrder("price_desc")}></div>
          Mayor precio
        </li>
      </ul>
    </section>
  );
}

export default MobileDialogOrder;
