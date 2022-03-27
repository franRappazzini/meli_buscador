import "./Home.css";

import Product from "../Product/Product";
import React from "react";
import { useSelector } from "react-redux";

function Home() {
  const products = useSelector((state) => state.products);

  // console.log(products);

  return (
    <main>
      <section className="section_order">
        <span>Ordenar por </span>
        <select name="select" className="select_order">
          <option value="" selected>
            Mas relevantes
          </option>
          <option value="asc_price">Menor precio</option>
          <option value="desc_price">Mayor precio</option>
        </select>
      </section>

      {products &&
        products.length > 0 &&
        products.map((prod) => <Product key={prod.id} {...prod} />)}
    </main>
  );
}

export default Home;
