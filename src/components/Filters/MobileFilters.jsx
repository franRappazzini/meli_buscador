import { BsArrowDownUp, BsSliders } from "react-icons/bs";
import React, { useState } from "react";

import { BsX } from "react-icons/bs";
import MobileDialogFilters from "../Dialogs/MobileDialogFilters";
import MobileDialogOrder from "../Dialogs/MobileDialogOrder";
import { useSelector } from "react-redux";

function MobileFilters({
  openDialogOrder,
  setOpenDialogOrder,
  openDialogFilters,
  setOpenDialogFilters,
}) {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const active_filters = useSelector((state) => state.filters);
  const search = useSelector((state) => state.products.search);

  function handleRemove(id) {
    setSelectedFilters(selectedFilters.filter((filter) => filter.id !== id));
  }

  function capitalized(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <>
      <section className="filters_mobile">
        <button onClick={() => setOpenDialogOrder(true)}>
          <BsArrowDownUp className="icon_filter" />
          Ordenar
        </button>
        <button onClick={() => setOpenDialogFilters(true)}>
          <BsSliders className="icon_filter" />
          Filtrar
        </button>
      </section>

      <h1 className="search_mobile">{capitalized(search)}</h1>

      <section className="active_filters--mobile">
        {active_filters.length > 0 &&
          active_filters.map((filter) => (
            <div key={filter.id} onClick={() => handleRemove(filter.id)}>
              <span>{filter.name}</span>
              <BsX size={20} color="rgba(0, 0, 0, 0.62)" />
            </div>
          ))}
      </section>

      <MobileDialogOrder
        openDialog={openDialogOrder}
        setOpenDialog={setOpenDialogOrder}
      />
      <MobileDialogFilters
        openDialog={openDialogFilters}
        setOpenDialog={setOpenDialogFilters}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
    </>
  );
}

export default MobileFilters;
