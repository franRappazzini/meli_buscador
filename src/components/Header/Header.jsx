import "./Header.css";

import { BsCart2, BsGeoAlt, BsSearch } from "react-icons/bs";
import React, { useEffect, useState } from "react";

import { get_products } from "../../redux/actions/ProductsAction";
import { useDispatch } from "react-redux";

function Header() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_products(search));
  }, [dispatch, search]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <header>
      <section>
        <img
          src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo__large_plus.png"
          alt="mercadolibre_logo"
        />
        <section className="section_envio">
          <BsGeoAlt size={25} />
          <div>
            <span>Enviar a</span>
            <p>Capital Federal</p>
          </div>
        </section>
      </section>
      <section className="section_header_container">
        <section className="first_section">
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Buscar productos, marcas y más…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <BsSearch className="search_icon" color="#666" size={20} />
          </form>
          <nav className="header_nav">
            <ul>
              <li>Categorias</li>
              <li>Ofertas</li>
              <li>Historial</li>
              <li>Supermercado</li>
              <li>Moda</li>
              <li>Vender</li>
              <li>Ayuda</li>
            </ul>
          </nav>
        </section>
        <section className="last_section">
          <img
            src="https://http2.mlstatic.com/D_NQ_877425-MLA47306668299_082021-OO.webp"
            alt="disney_plus"
            className="img_disney"
          />
          <nav className="header_nav--2">
            <ul className="ul_section_2">
              <li>Crea tu cuenta</li>
              <li>Ingresa</li>
              <li>Mis compras</li>
              <li>
                <BsCart2 size={20} />
              </li>
            </ul>
          </nav>
        </section>
      </section>
    </header>
  );
}

export default Header;
