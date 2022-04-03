import "./Filters.css";

import { BsFillLightningFill, BsX } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SwitchBtn from "../SwitchBtn/SwitchBtn";
import { post_filters } from "../../redux/actions/FiltersAction";

function Filters() {
  const [modelLimit, setModelLimit] = useState(9);
  const [switchFull, setSwitchFull] = useState(false);
  const [switchFree, setSwitchFree] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const filters = useSelector((state) => state.products.filters);
  const active_filters = useSelector((state) => state.filters);
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
  }

  function handleRemove(id) {
    setSelectedFilters(selectedFilters.filter((filter) => filter.id !== id));
  }

  function handleFullShipping() {
    setSwitchFull(!switchFull);

    !switchFull
      ? handleSelected("shipping", "fulfillment", "Full")
      : handleRemove("shipping");
  }

  function handleFreeShipping() {
    setSwitchFree(!switchFree);

    !switchFree
      ? handleSelected("shipping_cost", "free", "Envio gratis")
      : handleRemove("shipping_cost");
  }

  return (
    <section>
      <section className="selected_filters_container">
        {active_filters.length > 0 &&
          active_filters.map((filter) => (
            <div key={filter.id} onClick={() => handleRemove(filter.id)}>
              <span>{filter.name}</span>
              <BsX size={20} color="#bfbfbf" />
            </div>
          ))}
      </section>

      {filters.length > 0 && (
        <>
          <button className="btn_free_shipping">
            <section>
              <div>
                <BsFillLightningFill size={15} color="#00a650" />
                <span className="full">FULL</span>
                te ahorra envios
              </div>
              <span className="text_full">Con tu carrito de compras</span>
            </section>

            <SwitchBtn checked={switchFull} onClick={handleFullShipping} />
          </button>

          <button className="btn_free_shipping">
            Envio gratis
            <SwitchBtn checked={switchFree} onClick={handleFreeShipping} />
          </button>

          {filters.map((filter) => (
            <div className="filter_container" key={filter.id}>
              <p className="filter_title">{filter.name}</p>
              <ul>
                {filter.values.slice(0, modelLimit).map((val) => (
                  <li
                    key={val.id}
                    className="li_filter"
                    onClick={() => handleSelected(filter.id, val.id, val.name)}
                  >
                    {val.name}{" "}
                    <span className="cant_results">({val.results})</span>
                  </li>
                ))}
                {filter.values.length > 9 &&
                  (modelLimit === 9 ? (
                    <li
                      className="li_limit"
                      onClick={() => setModelLimit(filter.length)}
                    >
                      Ver todos
                    </li>
                  ) : (
                    <li className="li_limit" onClick={() => setModelLimit(9)}>
                      Ver menos
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </>
      )}
    </section>
  );
}

export default Filters;
