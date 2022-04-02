import { BsArrowDownUp, BsSliders } from "react-icons/bs";

import MobileDialogFilters from "../Dialogs/MobileDialogFilters";
import MobileDialogOrder from "../Dialogs/MobileDialogOrder";
import React from "react";

function MobileFilters({
  openDialogOrder,
  setOpenDialogOrder,
  openDialogFilters,
  setOpenDialogFilters,
}) {
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

      <MobileDialogOrder
        openDialog={openDialogOrder}
        setOpenDialog={setOpenDialogOrder}
      />
      <MobileDialogFilters
        openDialog={openDialogFilters}
        setOpenDialog={setOpenDialogFilters}
      />
    </>
  );
}

export default MobileFilters;
