import React from "react";
import TopImage from "../components/TopImage.jsx";

const Blog = () => {
  const blogImages = [
    {
      title: "Runway-Inspired Trends",
      imageSource: "/images/img12.jpeg",
    },
    {
      title: "Must Have Skater Girls Items",
      imageSource: "/images/n5.jpeg",
    },
    {
      title: "AW20 Menswear Trends",
      imageSource: "/images/img14.jpeg",
    },
  ];

  return (
    <>
      <TopImage
        imageSrc="/images/b2.jpg"
        mainHeading="#ReadMore"
        subText="Read all case studies about our products"
      />

      {blogImages.map((element, index) => (
        <div
          key={index}
          className="my-16 gap-8 w-full flex flex-col md:flex-row justify-center items-center"
        >
          <img
            className="rounded-md object-cover h-[260px] w-[90%] md:w-[30%] shadow-lg"
            src={element.imageSource}
            alt={`Blog image ${index + 1}`}
            loading="lazy"
          />

          <div className="w-[90%] md:w-[35%] text-center md:text-left">
            <h3 className="text-2xl font-semibold text-charcoal">
              {element.title}
            </h3>

            <p className="my-3 text-charcoal/70 text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
              modi exercitationem ducimus fuga consequuntur molestias, quaerat
              delectus nemo incidunt voluptas.
            </p>

            <p className="font-semibold text-[16px] text-leather cursor-pointer hover:underline">
              Continue reading →
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Blog;
