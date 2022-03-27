import Product from "../Product/Product";
import React from "react";
import { useSelector } from "react-redux";

function Home() {
  const products = useSelector((state) => state.products);

  console.log(products);

  return (
    <main>
      {products &&
        products.length > 0 &&
        products.map((prod) => <Product key={prod.id} {...prod} />)}
    </main>
  );
}

export default Home;
