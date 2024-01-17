import React, { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";
import "./Basket.scss";
import { Helmet } from "react-helmet-async";
function Basket() {
  const { basket, incDecCount, deleteBasket } = useContext(BasketContext);

  return (
    <>
     <Helmet>
          <title>Basket </title>
        </Helmet>
      {basket.length ? (
        <div className="basket_container_cards">
          {basket.map((item) => (
            <div className="basket_container_cards_card">
              <div className="image">
                <img src={item.image} alt="" />
              </div>
              <div className="operations">
                <div className="title">
                  <p>{item.title}</p>
                </div>
                <div className="reviews">
                  <div className="star">
                    <i class="fa-solid fa-star"></i> 5.0
                  </div>
                  <div className="like">
                    <i class="fa-solid fa-heart"></i>
                    29
                  </div>
                </div>
                <p className="desc">{item.description}</p>
                <div className="butons">
                  <button
                    className="left"
                    onClick={() => incDecCount(item, "dec")}
                  >
                    -
                  </button>
                  <span>{item.count}</span>
                  <button
                    className="right
                  "
                    onClick={() => incDecCount(item, "inc")}
                  >
                    +
                  </button>
                </div>
                <button onClick={() => deleteBasket(item)}>remove</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="empty">Basket is empty..</h1>
      )}
    </>
  );
}

export default Basket;
