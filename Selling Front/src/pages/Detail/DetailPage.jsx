import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DetailPage.scss";
import { BasketContext } from "../../context/BasketContext";
import { Helmet } from "react-helmet-async";
function DetailPage() {
    const {addBasket} = useContext(BasketContext)

  const { id } = useParams();
  const [dbData, setDbData] = useState([]);
  async function getFetch() {
    const result = await fetch("http://localhost:3003/" + id);
    console.log(result);
    const data = await result.json();
    setDbData(data);
  }
  useEffect(() => {
    getFetch();
  }, []);
  return (
    
    <div className="detail">
       <Helmet>
          <title>Detail </title>
        </Helmet>
      <div className="detail_container">
        {console.log(dbData)}
        {
          <div className="detail_container_card">
            <div className="image">
              <img src={dbData.image} alt="" />
            </div>
            <div className="operations">
              <div className="title">
                <p>{dbData.title}</p>
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
              <p className="desc">{dbData.description}</p>
              <div className="butons">
                <button className="left" onClick={() => addBasket(dbData)}>
                  CART
                </button>
              
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default DetailPage;
