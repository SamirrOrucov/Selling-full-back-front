import React from "react";
import { Helmet } from "react-helmet-async";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import OurProducts from "../../components/OurProducts/OurProducts";
import AboutUsSection from "../../components/AboutUs/AboutUsSection";
import TeamSection from "../../components/TeamSection/TeamSection";

function HomePage() {
  return (
    <>
      <div>
        <Helmet>
          <title>Home </title>
        </Helmet>
        <HeaderSection/>
        <OurProducts/>
        <AboutUsSection/>
        <TeamSection/>
      </div>
    </>
  );
}

export default HomePage;
