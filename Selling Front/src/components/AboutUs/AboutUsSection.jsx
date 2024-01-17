import React from "react";
import "./AboutUsSection.scss";
function AboutUsSection() {
  return (
    <div className="about">
      <div className="about_container">
        <div className="about_container_imageSide">
          <div className="image">
            <img
              src="https://preview.colorlib.com/theme/selling/images/about_1.jpg.webp"
              alt=""
            />
          </div>
          <div className="title">
            <h6>Trusted Merchant</h6>
            <p>FOR 50 YEARS</p>
          </div>
        </div>
        <div className="about_container_textSide">
          <p>MERCHANT COMPANY</p>
          <h6>About Us</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga
            ipsa, repellat blanditiis nihil, consectetur. Consequuntur eum
            inventore, rem maxime, nisi excepturi ipsam libero ratione adipisci
            alias eius vero vel!
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
