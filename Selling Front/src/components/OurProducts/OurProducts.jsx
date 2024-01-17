import React, { useContext, useEffect, useState } from "react";
import "./Ourproducts.scss";
import { BasketContext } from "../../context/BasketContext";
import { Link } from "react-router-dom";
import { WishlistContext } from "../../context/WishlistContext";
function OurProducts() {
  const { addBasket } = useContext(BasketContext);
  const { handleWishlist, wishlist } = useContext(WishlistContext);

  const [sortBy, setSortBy] = useState(null);
  const [search, setSearch] = useState("");
  const [dbData, setDbData] = useState([]);
  async function getFetch() {
    const result = await fetch("http://localhost:3003/");
    const data = await result.json();
    setDbData(data);
  }
  useEffect(() => {
    getFetch();
  }, []);

  return (
    <div className="products">
      <input
        type="text"
        name="search"
        id=""
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for name"
      />
      <button onClick={() => setSortBy({ field: "title", asc: true })}>
        A-z
      </button>
      <button onClick={() => setSortBy({ field: "title", asc: false })}>
        Z-a
      </button>
      <button onClick={() => setSortBy(null)}>Default</button>

      <div className="products_container">
        <div className="products_container_head">
          <p>POPULAR PRODUCTS</p>
          <h6>Our Products</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut
            consequatur laboriosam ipsam.
          </p>
        </div>
        <div className="products_container_cards">
          {dbData
            .filter((x) =>
              x.title.toLowerCase().includes(search.toLocaleLowerCase())
            )
            .sort((a, b) => {
              if (!sortBy) {
                return 0;
              } else if (sortBy.asc) {
                return a[sortBy.field] > b[sortBy.field]
                  ? 1
                  : b[sortBy.field] > a[sortBy.field]
                  ? -1
                  : 0;
              } else if (sortBy.asc === false) {
                return a[sortBy.field] < b[sortBy.field]
                  ? 1
                  : b[sortBy.field] < a[sortBy.field]
                  ? -1
                  : 0;
              }
            })
            .map((item) => (
              <div className="products_container_cards_card " key={item._id}>
                <div className="image">
                  <img src={item.image} alt="" />
                </div>
                <div className="operations">
                  <div className="title">
                    <p>{item.title}</p>
                  </div>
                  <div className="reviews">
                    <div className="star">
                      <i className="fa-solid fa-star"></i> 5.0
                    </div>
                    <div className="like">
                      <i className="fa-solid fa-heart"></i>
                      29
                    </div>
                  </div>
                  <p className="desc">{item.description}</p>
                  <div className="butons">
                    <button className="left" onClick={() => addBasket(item)}>
                      CART
                    </button>
                    <button
                      className="right
                "
                    >
                      <Link to={"/detail/" + item._id}>VIEW</Link>
                    </button>
                    {wishlist.some((x) => x._id === item._id) ? (
                      <i
                        onClick={() => handleWishlist(item)}
                        class="fa-solid fa-heart red"
                      ></i>
                    ) : (
                      <i
                        onClick={() => handleWishlist(item)}
                        class="fa-regular fa-heart"
                      ></i>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default OurProducts;
