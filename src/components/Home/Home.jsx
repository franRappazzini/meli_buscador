import "./Home.css";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Filters from "../Filters/Filters";
import Product from "../Product/Product";
import { order_by } from "../../redux/actions/OrderByAction";

function Home() {
  const [orderValue, setOrderValue] = useState("relevance");
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(order_by(orderValue));
  }, [dispatch, orderValue]);

  return (
    <main>
      <section className="section_order">
        <span>Ordenar por </span>
        <select
          name="select"
          className="select_order"
          value={orderValue}
          onChange={(e) => setOrderValue(e.target.value)}
        >
          <option value="relevance">Mas relevantes</option>
          <option value="price_asc">Menor precio</option>
          <option value="price_desc">Mayor precio</option>
        </select>
      </section>

      <section className="main_section">
        <aside>
          <h3>Producto</h3>
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
