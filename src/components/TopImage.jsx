import React from "react";

const TopImage = ({ imageSrc, mainHeading, subText }) => {
  return (
    <div
      className="w-full my-20 bg-cover flex flex-col justify-center items-center h-80 relative"
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div className="absolute inset-0 bg-black/25"></div>

      <div className="relative z-10 flex flex-col items-center gap-3">
        <h1 className="tracking-wider text-white text-4xl md:text-5xl font-bold">
          {mainHeading}
        </h1>
        <p className="tracking-wide text-white/80">
          {subText}
        </p>
      </div>
    </div>
  );
};

export default TopImage;
