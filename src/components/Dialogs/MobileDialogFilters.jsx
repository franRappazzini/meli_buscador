import "./MobileDialogFilters.css";

import {
  BsArrowLeft,
  BsChevronDown,
  BsChevronUp,
  BsFillLightningFill,
} from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SwitchBtn from "../SwitchBtn/SwitchBtn";
import { post_filters } from "../../redux/actions/FiltersAction";

function MobileDialogFilters({
  openDialog,
  setOpenDialog,
  selectedFilters,
  setSelectedFilters,
}) {
  const [showFilters, setShowFilters] = useState(false);
  const [switchFull, setSwitchFull] = useState(false);
  const [switchFree, setSwitchFree] = useState(false);
  const filters = useSelector((state) => state.products.filters);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(post_filters(selectedFilters));

    // verificar si el filtro esta activo, sino desactiva el switch
    const verify_shipping_cost = selectedFilters.find(
      (filter) => filter.id === "shipping_cost"
    );
    const verify_shipping = selectedFilters.find(
      (filter) => filter.id === "shipping"
    );
    !verify_shipping_cost && setSwitchFree(false);
    !verify_shipping && setSwitchFull(false);
  }, [dispatch, selectedFilters, filters]);

  function handleClick(id_filter) {
    setShowFilters(id_filter);

    if (showFilters === id_filter) {
      setShowFilters(false);
    }
  }

  // filtra los productos
  function handleSelected(id, value, name) {
    const find_filter = selectedFilters.find((filter) => filter.id === id);

    if (find_filter) {
      // si ya existe ese filtro, le cambia el nuevo valor
      const new_filters = selectedFilters.filter((filter) => filter.id !== id);
      setSelectedFilters([...new_filters, { id, value, name }]);
    } else {
      setSelectedFilters([...selectedFilters, { id, value, name }]);
    }

    setShowFilters(false);
    setOpenDialog(false);
  }

  function handleRemove(id) {
    setSelectedFilters(selectedFilters.filter((filter) => filter.id !== id));
    setOpenDialog(false);
  }

  function handleFullShipping() {
    setSwitchFull(!switchFull);

    !switchFull
      ? handleSelected("shipping", "fulfillment", "Full")
      : handleRemove("shipping");
    setOpenDialog(false);
  }

  function handleFreeShipping() {
    setSwitchFree(!switchFree);

    !switchFree
      ? handleSelected("shipping_cost", "free", "Envio gratis")
      : handleRemove("shipping_cost");
    setOpenDialog(false);
  }

  return (
    <section className={`dialog_filters ${!openDialog && "open_false"}`}>
      <BsArrowLeft
        onClick={() => setOpenDialog(false)}
        color="#3483fa"
        size={30}
        className="arrow_icon"
      />

      <h3>Filtrar por</h3>

      <ul>
        <li className="li_free_shipping">
          <button className="btn_free_shipping">
            <section>
              <div>
                <BsFillLightningFill size={20} color="#00a650" />
                <span className="full--mobile">FULL</span>
                te ahorra envios
              </div>
              <span className="text_full--mobile">
                Con tu carrito de compras
              </span>
            </section>

            <SwitchBtn checked={switchFull} onClick={handleFullShipping} />
          </button>
        </li>
        <li className="li_free_shipping">
          <button className="btn_free_shipping">
            <section>
              <div>Envio gratis</div>
            </section>

            <SwitchBtn checked={switchFree} onClick={handleFreeShipping} />
          </button>
        </li>
        {filters.length > 0 &&
          filters.map((filter) => (
            <>
              {console.log(filter)}
              <li
                key={filter.id}
                className="li_filter_name"
                onClick={() => handleClick(filter.id)}
              >
                {filter.name}
                {showFilters === filter.id ? (
                  <BsChevronDown size={15} color="#3483fa" />
                ) : (
                  <BsChevronUp size={15} color="#3483fa" />
                )}
              </li>
              <div
                className={
                  showFilters === filter.id
                    ? "container_sub_filters-active"
                    : "container_sub_filters"
                }
              >
                {filter.values.map((val) => (
                  <li
                    key={val.id}
                    className="sub_filter_name"
                    onClick={() => handleSelected(filter.id, val.id, val.name)}
                  >
                    {val.name}
                  </li>
                ))}
              </div>
            </>
          ))}
      </ul>
    </section>
  );
}

export default MobileDialogFilters;
