import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaStar } from "react-icons/fa";

const ProductSection = ({ isTitlePresent, titleFirst, titleSecond, images }) => {
  return (
    <>
      {isTitlePresent && (
        <>
          <h2 className="text-center text-5xl mt-5 font-bold text-charcoal">
            {titleFirst}
            <span className="text-leather"> {titleSecond}</span>
          </h2>
          <p className="my-4 text-center mb-3 text-charcoal/70">
            New Collection with Modern Design
          </p>
        </>
      )}

      <div className="px-6 md:px-12 my-15 flex flex-wrap justify-evenly items-center gap-4">
        {images.map((element, index) => (
          <Link key={element.id} to={`/product-details/${element.id}`} className="block">
            <div className="cursor-pointer h-[390px] p-3 w-[280px] md:h-[410px] md:w-[300px] shadow-lg hover:shadow-xl border border-charcoal/20 transition-all duration-500 rounded-[5%] flex flex-col justify-between mb-7 hover:scale-105 bg-cream">
              <img
                className="rounded-lg"
                src={element.src}
                alt={`image pic ${index + 1}`}
                loading="lazy"
              />

              <div className="flex flex-col justify-between mt-2">
                <span className="text-charcoal text-[14px]">HBM </span>
                <p className="transition-all duration-200 hover:text-leather my-1 tracking-wider text-charcoal">
                  {element.name}
                </p>
                <div className="flex gap-1">
                  {Array.from({ length: element.rating }).map((_, idx) => (
                    <FaStar key={idx} className="text-[14px] text-yellow-400" />
                  ))}
                </div>

                <div className="flex justify-between items-center mt-2">
                  <p className="text-leather font-semibold">PKR {element.price}</p>
                  <FaShoppingCart className="text-2xl w-8 h-8 rounded-[40%] text-leather p-2 bg-cream hover:bg-leather hover:text-cream transition-all duration-300" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductSection;
