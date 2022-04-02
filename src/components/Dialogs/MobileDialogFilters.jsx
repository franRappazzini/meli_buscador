import "./MobileDialogFilters.css";

import React, { useState } from "react";

import { BsArrowLeft } from "react-icons/bs";
import { useSelector } from "react-redux";

function MobileDialogFilters({ openDialog, setOpenDialog }) {
  const [showFilters, setShowFilters] = useState(false);
  const filters = useSelector((state) => state.products.filters);

  console.log(filters);

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
        {filters.length > 0 &&
          filters.map((filter) => (
            <>
              {console.log(filter)}
              <li
                key={filter.id}
                className="li_filter_name"
                onClick={() => setShowFilters(!showFilters)}
              >
                {filter.name}
              </li>
              <div
                className={
                  showFilters
                    ? "container_sub_filters-active"
                    : "container_sub_filters"
                }
              >
                {filter.values.map((val) => (
                  <li key={val.id} className="sub_filter_name">
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
