import "./Filters.css";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BsX } from "react-icons/bs";
import { post_filters } from "../../redux/actions/FiltersAction";

function Filters() {
  // const [modelLimit, setModelLimit] = useState(9);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const filters = useSelector((state) => state.products.filters);
  const active_filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(post_filters(selectedFilters));
    // console.log(filters);
  }, [dispatch, selectedFilters]);

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

      <button className="btn_free_shipping">
        Envio gratis
        <input type="checkbox" />
      </button>

      {filters.length > 0 &&
        filters.map((filter) => (
          <div className="filter_container" key={filter.id}>
            <p className="filter_title">{filter.name}</p>
            <ul>
              {filter.values.slice(0, 9).map((val) => (
                <li
                  key={val.id}
                  className="li_filter"
                  onClick={() => handleSelected(filter.id, val.id, val.name)}
                >
                  {val.name}{" "}
                  <span className="cant_results">({val.results})</span>
                </li>
              ))}
              {filter.values.length > 9 && (
                <li className="li_limit">Ver todos</li>
              )}
            </ul>
          </div>
        ))}
    </section>
  );
}

export default Filters;
