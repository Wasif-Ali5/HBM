import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div
      className="overflow-hidden h-[100vh] w-full bg-cover bg-[center_top_25px] relative"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="absolute top-20 left-5 md:top-40 md:left-20 z-10">
        <h3 className="text-charcoal text-2xl md:text-3xl font-semibold mb-2">
          Trade-in Offer
        </h3>

        <h1 className="text-black text-4xl md:text-6xl font-bold tracking-wider mb-4">
          Super value deals <br />
          <span className="text-leather">On all products</span>
        </h1>

        <p className="text-white text-xl font-semibold mb-6">
          Save more with coupons & 30% off
        </p>

        <button
          onClick={() => navigate("/shop")}
          className="w-60 h-12 md:h-14 font-bold text-cream bg-leather hover:bg-[#088178] transition-colors text-xl rounded"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
