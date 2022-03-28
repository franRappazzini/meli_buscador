import "./Filters.css";

import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

function Filters() {
  //   const [modelLimit, setModelLimit] = useState(9);
  const filters = useSelector((state) => state.products.filters);

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  return (
    <>
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
                <li key={val.id}>
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

      <div>
        {/* {condition && (
        <div className="filter_container">
          <p className="filter_title">{condition.name}</p>
          <ul>
            {condition.values.map((val) => (
              <li key={val.id}>
                {val.name} <span className="cant_results">({val.results})</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {installments && (
        <div className="filter_container">
          <p className="filter_title">{installments.name}</p>
          <ul>
            {installments.values.map((val) => (
              <li key={val.id}>
                {val.name} <span className="cant_results">({val.results})</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {price && (
        <div className="filter_container">
          <p className="filter_title">{price.name}</p>
          <ul>
            {price.values.map((val) => (
              <li key={val.id}>
                {val.name} <span className="cant_results">({val.results})</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {model && (
        <div className="filter_container">
          <p className="filter_title">{model.name}</p>
          <ul>
            {model.values.slice(0, modelLimit).map((val) => (
              <li key={val.id}>
                {val.name} <span className="cant_results">({val.results})</span>
              </li>
            ))}
            {modelLimit === 9 ? (
              <li
                onClick={() => setModelLimit(model.length)}
                className="li_model_limit"
              >
                Ver todos
              </li>
            ) : (
              <li onClick={() => setModelLimit(9)} className="li_model_limit">
                Ver menos
              </li>
            )}
          </ul>
        </div>
      )} */}
      </div>
    </>
  );
}

export default Filters;
