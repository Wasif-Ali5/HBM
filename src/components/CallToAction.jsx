import React from "react";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <div
      className="mt-7 mb-25 w-full bg-cover h-300 flex flex-col items-center justify-center gap-6 relative"
      style={{ backgroundImage: "url('/images/b2.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative flex flex-col mt-10 items-center gap-4 z-10 text-center">
        <p className="text-white font-semibold text-xl">Repair Services</p>
        <h3 className="text-white font-semibold md:text-3xl text-2xl">
          Up to <span className="text-leather">30% off </span>- All Belts & Wallets
        </h3>
        <button
          className="transition-all duration-300 mb-10 cursor-pointer rounded-md shadow-lg px-6 py-3 bg-leather text-cream font-semibold hover:bg-[#088178] hover:text-cream"
          onClick={() => navigate("/shop")}
        >
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
