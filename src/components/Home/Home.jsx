import "./Home.css";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Filters from "../Filters/Filters";
import Product from "../Product/Product";
import { get_category } from "../../redux/actions/CategoryActoin";
import { order_by } from "../../redux/actions/OrderByAction";

function Home() {
  const [orderValue, setOrderValue] = useState("relevance");
  const search = useSelector((state) => state.products.search);
  const products = useSelector((state) => state.products.products);
  const cant_products = useSelector((state) => state.products.cant_products);
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(order_by(orderValue));

    // para obtener las categorias relacionadas con la busqueda
    dispatch(get_category(products[0].category_id));
    console.log("CATEGORIAS", categories);
  }, [dispatch, orderValue]);

  function capitalized(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <main>
      <section className="first_section_main">
        <section>
          {products.length > 0 &&
            categories.map((cat) => <span>{cat.name}</span>)}
        </section>

        <section className="section_order">
          <span>Ordenar por </span>
          <select
            name="select"
            className="select_order"
            value={orderValue}
            onChange={(e) => setOrderValue(e.target.value)}
          >
            <option className="option_order" value="relevance">
              Mas relevantes
            </option>
            <option className="option_order" value="price_asc">
              Menor precio
            </option>
            <option className="option_order" value="price_desc">
              Mayor precio
            </option>
          </select>
        </section>
      </section>

      <section className="main_section">
        <aside>
          {products.length > 0 && (
            <section className="product_search">
              <h1>{capitalized(search)}</h1>
              <span className="cant_products">
                {new Intl.NumberFormat().format(cant_products)} resultados
              </span>
            </section>
          )}

          <Filters />
        </aside>
        <section>
          {products &&
            products.length > 0 &&
            products.map((prod) => <Product key={prod.id} {...prod} />)}
        </section>
      </section>
    </main>
  );
}

export default Home;
