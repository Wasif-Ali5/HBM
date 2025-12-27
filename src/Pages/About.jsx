import React, { useState } from "react";
import TopImage from "../components/TopImage";
import Features from "../components/Features";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const AboutPage = () => {
  return (
    <>
      <TopImage
        imageSrc="/images/b1.jpg"
        mainHeading="#KnowUs"
        subText="Learn and read more about us"
      />

      <div className="my-15 flex w-full h-auto justify-center items-center flex-col md:flex-row gap-8">
        <img
          className="w-[90%] md:w-[35%] h-[330px] rounded-lg shadow-lg"
          src="/images/hero.jpg"
          alt="About us image"
          loading="lazy"
        />

        <div className="w-[90%] md:w-[30%]">
          <h2 className="tracking-wide text-3xl md:text-4xl text-center md:text-start text-charcoal font-semibold">
            Who We Are ?
          </h2>

          <p className="text-center md:text-start my-4 text-charcoal/70 text-[16px]">
            We are a new and growing eCommerce brand driven by a passion for quality, style, 
            and customer satisfaction. Our journey has just begun, but our goal is clear — to make 
            online shopping simple, reliable, and enjoyable for everyone. We carefully select and
             design products that offer great value without compromising on quality. As a new 
             name in the market, we focus on building trust through transparency, fair pricing, 
             and responsive customer support. Every order, review, and customer interaction helps 
             us learn and improve as we continue to grow alongside our community.
          </p>
        </div>
      </div>

      <Features />
    </>
  );
};

export default AboutPage;
