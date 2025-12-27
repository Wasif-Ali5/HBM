import React from "react";
import { useNavigate } from "react-router-dom";

const ActionBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="mt-15 mb-15 h-180 md:h-80 w-full text-white flex flex-wrap justify-evenly items-center gap-6">
        {[{
          title: "Crazy deals",
          heading: "Buy 1 Get 1 Free",
          description: "The best wallets is on sale at HBM",
          img: "/images/img2.jpeg",
          btnText: "Explore Now"
        },
        {
          title: "leather/Wallets",
          heading: "Upcoming Season",
          description: "The best leather Belts is on sale at HBM",
          img: "/images/f4.webp",
          btnText: "Collection"
        }].map((banner, idx) => (
          <div
            key={idx}
            className="mb-10 bg-cover md:h-[100%] md:w-[40%] h-[40%] w-[90%] flex flex-col justify-center gap-2 pl-10 relative rounded-lg overflow-hidden shadow-lg"
            style={{ backgroundImage: `url('${banner.img}')` }}
          >
            <div className="absolute inset-0 bg-black/25"></div>
            <div className="relative mt-10 mb-10 text-white z-10 text-charcoal">
              <p className="text-xl font-semibold">{banner.title}</p>
              <h4 className="text-3xl font-bold">{banner.heading}</h4>
              <p className="text-[16px]">{banner.description}</p>
              <button
                onClick={() => navigate("/shop")}
                className="transition-all duration-300 cursor-pointer w-36 text-[16px] px-4 py-2 rounded-sm bg-leather text-cream font-semibold hover:bg-[#088178] hover:text-cream mt-2"
              >
                {banner.btnText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ActionBar;
