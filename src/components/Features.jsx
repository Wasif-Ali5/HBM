import React from "react";

const Features = () => {
  const features = [
    { src: "/images/f6.png", text: "Free Shipping" },
    { src: "/images/f2.png", text: "Online Order" },
    { src: "/images/f3.png", text: "Save Money" },
    { src: "/images/f4.png", text: "Promotions" },
    { src: "/images/f5.png", text: "Happy Sell" },
    { src: "/images/f6.png", text: "24/7 Support" },
  ];

  return (
    <div className="my-20 flex flex-wrap justify-evenly items-center">
      {features.map((feature, index) => (
        <div
          key={index}
          className="mb-5 rounded-lg h-45 w-40 flex flex-col justify-center items-center shadow-lg bg-cream transition-transform"
        >
          <img
            src={feature.src}
            alt={`Feature image ${index + 1}`}
            loading="lazy"
            className="mb-3"
          />
          <button className="w-[70%] py-2 mb-2 rounded text-cream bg-leather font-semibold transition-colors">
            {feature.text}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Features;
