import "./Filters.css";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { post_filters } from "../../redux/actions/FiltersAction";

function Filters() {
  // const [modelLimit, setModelLimit] = useState(9);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const filters = useSelector((state) => state.products.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(post_filters(selectedFilters));
    // console.log(filters);
  }, [dispatch, selectedFilters]);

  // filtra los productos
  function handleSelected(id, value) {
    console.log(id, value);
    setSelectedFilters([...selectedFilters, { id, value }]);
  }

  return (
    <div>
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
                  onClick={() => handleSelected(filter.id, val.id)}
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
    </div>
  );
}

export default Filters;
