import React from "react";
import Hero from "../components/Hero.jsx";
import Features from "../components/Features.jsx";
import ProductSection from "../components/ProductSection.jsx";
import { ProductImages, ArrivalImages } from "../assets/data/products.js";
import ActionBanner from "../components/ActionBar.jsx";
import CalltoAction from "../components/CalltoAction.jsx";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Features />
      <ProductSection
        isTitlePresent={true}
        titleFirst="Featured"
        titleSecond="Belts Category"
        images={ProductImages}
      />
      <CalltoAction />
      <ProductSection
        isTitlePresent={true}
        titleFirst="Featured"
        titleSecond="Wallets"
        images={ArrivalImages}
      />
      <ActionBanner />
    </>
  );
};

export default LandingPage;
