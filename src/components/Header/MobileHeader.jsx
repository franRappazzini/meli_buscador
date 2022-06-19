import { BsCart2, BsGeoAlt, BsList, BsSearch } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { get_products } from "../../redux/actions/ProductsAction";

function MobileHeader() {
  const [search, setSearch] = useState("");
  // const [openDialog, setOpenDialog] = useState(false);
  const order_by = useSelector((state) => state.orderBy);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_products(search, order_by, filters));
  }, [dispatch, search, order_by, filters]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <header>
      <section className="main_section_header--mobile">
        <img
          src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo__small@2x.png"
          alt="mercadolibre_logo"
          width="44px"
          onClick={() => setSearch("")}
        />
        <form action="" onSubmit={handleSubmit}>
          <BsSearch className="search_icon--mobile" color="#666" size={20} />
          <input
            type="text"
            placeholder="Estoy buscando…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <BsList size={25} color="#666" />
        <BsCart2 size={25} color="#666" />
      </section>
      <section className="section_envio--mobile">
        <div>
          <BsGeoAlt color="#666" /> <p> Enviar a Capital Federal</p>
        </div>
        <span>{">"}</span>
      </section>
    </header>
  );
}

export default MobileHeader;
