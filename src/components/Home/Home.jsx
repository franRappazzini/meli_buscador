import "./Home.css";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Filters from "../Filters/Filters";
import MobileFilters from "../Filters/MobileFilters";
import Product from "../Product/Product";
import { get_category } from "../../redux/actions/CategoryActoin";
import { order_by } from "../../redux/actions/OrderByAction";

function Home() {
  const [orderValue, setOrderValue] = useState("relevance");
  const [openDialogOrder, setOpenDialogOrder] = useState(false);
  const [openDialogFilters, setOpenDialogFilters] = useState(false);
  const search = useSelector((state) => state.products.search);
  const products = useSelector((state) => state.products.products);
  const cant_products = useSelector((state) => state.products.cant_products);
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    window.innerWidth > 820 && dispatch(order_by(orderValue));

    // para obtener las categorias relacionadas con la busqueda
    dispatch(
      get_category(products.length > 0 ? products[0].category_id : null)
    );
  }, [dispatch, orderValue, products]);

  function capitalized(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <main>
      {products.length > 0 && (
        <>
          <section className="first_section_main">
            <ul className="ul_categories">
              {categories.map((cat) => (
                <li key={cat.id}>{cat.name}</li>
              ))}
            </ul>

            <section className="section_order">
              <span>Ordenar por </span>
              <select
                name="select"
                className="select_order"
                value={orderValue}
                onChange={(e) => setOrderValue(e.target.value)}
              >
                <li className="option_order" value="relevance">
                  Mas relevantes
                </li>
                <li className="option_order" value="price_asc">
                  Menor precio
                </li>
                <li className="option_order" value="price_desc">
                  Mayor precio
                </li>
              </select>
            </section>
          </section>

          <section className="main_section">
            <aside>
              {
                <section className="product_search">
                  <h1>{capitalized(search)}</h1>
                  <span className="cant_products">
                    {new Intl.NumberFormat().format(cant_products)} resultados
                  </span>
                </section>
              }

              <Filters />
            </aside>

            <MobileFilters
              openDialogFilters={openDialogFilters}
              openDialogOrder={openDialogOrder}
              setOpenDialogFilters={setOpenDialogFilters}
              setOpenDialogOrder={setOpenDialogOrder}
            />

            <section>
              <h1>{capitalized(search)}</h1>

              {products.map((prod) => (
                <Product key={prod.id} {...prod} />
              ))}
            </section>
          </section>
        </>
      )}
    </main>
  );
}

export default Home;
