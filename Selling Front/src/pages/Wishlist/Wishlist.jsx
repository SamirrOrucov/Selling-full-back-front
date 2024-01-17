import React, { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import { Helmet } from "react-helmet-async";
import "./Wishlist.scss";
import { BasketContext } from "../../context/BasketContext";
function Wishlist() {
  const { wishlist, handleWishlist } = useContext(WishlistContext);
  const { addBasket } = useContext(BasketContext);

  console.log(wishlist);
  return (
    <>
      <Helmet>
        <title>Wishlist </title>
      </Helmet>
      <div className="wishlist_container_cards">
        {wishlist.map((item) => (
          <div className="wishlist_container_cards_card">
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
                <button onClick={() => handleWishlist(item)}>
                  <i class="fa-solid fa-heart"></i>
                </button>
              </div>
              <button onClick={() => addBasket(item)}>
                <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Wishlist;
