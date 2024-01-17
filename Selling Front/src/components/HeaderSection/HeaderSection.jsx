import React from "react";
import "./HeaderSection.scss";
function HeaderSection() {
  return (
    <div className="header">
      
      <div className="header_container">
        <div className="header_container_text">
        <div className="filterDiv">
        </div>
          <h5>Shop With Us</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            assumenda ea quo cupiditate facere deleniti fuga officia. ?
          </p>
          <div className="btns">
            <button className="left">Shop Now</button>
            <button className="right">Club Membership</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
