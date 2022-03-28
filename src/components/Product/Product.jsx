import "./Product.css";

import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import React, { useEffect, useState } from "react";

function Product({ id, thumbnail, title, prices, shipping }) {
  const [totalReviews, setTotalReviews] = useState(0);
  const [ratingAverage, setRatingAverage] = useState(0);

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/reviews/item/${id}`)
      .then((res) => res.json())
      .then((data) => {
        data.paging.total && setTotalReviews(data.paging.total);
        data.rating_average && setRatingAverage(data.rating_average);
      });
  }, [id]);

  function discount_rate(high_price, low_price) {
    const discount = (high_price - low_price) / high_price;
    return Math.floor(discount * 100);
  }

  function render_stars(ratingAverage) {
    const total = [];
    // segun la cantidad de enteros que tenga el ratingAverage se renderizan las estrellas
    for (let i = 1; i <= Math.floor(ratingAverage); i++) {
      total.push(
        <BsStarFill color="#3483fa" className="star_icon" size={13} />
      );
    }

    // si el ratingAverage tiene un decimal se renderiza media estrella mas
    if (!Number.isInteger(ratingAverage)) {
      total.push(
        <BsStarHalf color="#3483fa" className="star_icon" size={13} />
      );
    }

    // si no llega a completar 5 estrellas se renderizan vacias
    if (Math.ceil(ratingAverage) < 5) {
      for (let i = Math.ceil(ratingAverage); i < 5; i++) {
        total.push(<BsStar color="#3483fa" className="star_icon" size={13} />);
      }
    }

    return total;
  }

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
            <div className="price_container">
              <p className="text_price">
                $
                {new Intl.NumberFormat().format(
                  prices.prices[prices.prices.length - 1].amount
                )}
              </p>
              {prices.prices[0].amount !==
                prices.prices[prices.prices.length - 1].amount && (
                <span>
                  {discount_rate(
                    prices.prices[0].amount,
                    prices.prices[prices.prices.length - 1].amount
                  )}
                  % OFF
                </span>
              )}
            </div>
            {shipping.free_shipping && (
              <p className="text_envio">Envio gratis</p>
            )}{" "}
          </div>
          <div className="reviews_container">
            {ratingAverage === 0 ? null : render_stars(ratingAverage)}
            {ratingAverage === 0 ? null : (
              <span className="total_reviews">{totalReviews}</span>
            )}
          </div>
        </section>
      </section>
    </article>
  );
}

export default Product;
