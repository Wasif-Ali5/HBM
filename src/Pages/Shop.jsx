import React, { useState } from "react";
import ProductSection from "../components/ProductSection.jsx";
import TopImage from "../components/TopImage.jsx";
import { ProductImages, ArrivalImages } from "../assets/data/products.js";

const Shop = () => {
  const [currentImages, setCurrentImages] = useState([...ProductImages]);
  const [isActive, setIsActive] = useState("1");

  return (
    <>
      <TopImage
        imageSrc="/images/b1.jpg"
        mainHeading="#stayhome"
        subText="Save more with coupons & 30% off!"
      />

      <ProductSection
        isTitlePresent={false}
        titleFirst="Tech"
        titleSecond="Titans"
        images={currentImages}
      />

      <div className="flex mb-16 items-center justify-center gap-4 w-full">
        <button
          onClick={() => {
            setIsActive("1");
            setCurrentImages([...ProductImages]);
          }}
          className={`transition-all duration-300 cursor-pointer rounded-md shadow-lg
            px-7 py-3 text-lg font-semibold border border-[#cce7d0]
            ${
              isActive === "1"
                ? "bg-leather text-white"
                : "bg-[#e8f6ea] text-charcoal"
            }
            hover:bg-leather hover:text-white`}
        >
          1
        </button>

        <button
          onClick={() => {
            setIsActive("2");
            setCurrentImages([...ArrivalImages]);
          }}
          className={`transition-all duration-300 cursor-pointer rounded-md shadow-lg
            px-7 py-3 text-lg font-semibold border border-[#cce7d0]
            ${
              isActive === "2"
                ? "bg-leather text-white"
                : "bg-[#e8f6ea] text-charcoal"
            }
            hover:bg-leather hover:text-white`}
        >
          2
        </button>
      </div>
    </>
  );
};

export default Shop;
