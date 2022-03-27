import "./Product.css";

import React from "react";

function Product({ thumbnail, title, price, prices }) {
  return (
    <article>
      <img src={thumbnail} alt={title} />
      <section>
        <h3>{title}</h3>
        <section className="details_product">
          <div>
            {prices.prices[0].amount !==
              prices.prices[prices.prices.length - 1].amount && (
              <span className="max_price">
                ${new Intl.NumberFormat().format(prices.prices[0].amount)}
              </span>
            )}
            <p className="text_price">
              $
              {new Intl.NumberFormat().format(
                prices.prices[prices.prices.length - 1].amount
              )}
            </p>
            <p className="text_envio">Envio gratis</p>
          </div>
          <div></div>
        </section>
      </section>
    </article>
  );
}

export default Product;
