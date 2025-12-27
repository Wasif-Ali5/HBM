import { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuSelected, setIsMenuSelected] = useState(true);

  function changeMenuState() {
    setIsMenuSelected(!isMenuSelected);
  }

  return (
    <>
      <div className="bg-[#F5F1EB] drop-shadow-md px-6 md:px-18 flex justify-between items-center w-full h-20 fixed top-0 left-0 z-50">
        <div>
          <img
            src="/images/logo3.jpg"
            alt="HBM Leather"
            loading="lazy"
            className="h-10"
          />
        </div>

        <div className="hidden md:flex items-center">
          <Link
            to="/"
            className="text-xl ml-14 transition-all duration-300 text-[#1C1C1C] hover:text-[#7A4A2E]"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-xl ml-14 transition-all duration-300 text-[#1C1C1C] hover:text-[#7A4A2E]"
          >
            Shop
          </Link>
          <Link
            to="/blog"
            className="text-xl ml-14 transition-all duration-300 text-[#1C1C1C] hover:text-[#7A4A2E]"
          >
            Blog
          </Link>
          <Link
            to="/about"
            className="text-xl ml-14 transition-all duration-300 text-[#1C1C1C] hover:text-[#7A4A2E]"
          >
            About
          </Link>
          <Link
            to="/contactUs"
            className="text-xl ml-14 transition-all duration-300 text-[#1C1C1C] hover:text-[#7A4A2E]"
          >
            Contact Us
          </Link>
          <Link to="/cart">
            <FaShoppingCart className="transition-all duration-300 text-[#1C1C1C] hover:text-[#7A4A2E] cursor-pointer text-2xl ml-14 mr-6" />
          </Link>
        </div>

        <div onClick={changeMenuState} className="block md:hidden cursor-pointer">
          {isMenuSelected ? (
            <FaBars className="text-3xl text-[#1C1C1C]" />
          ) : (
            <FaTimes className="text-3xl text-[#1C1C1C]" />
          )}
        </div>
      </div>
      
      {!isMenuSelected && (
        <div className="fixed md:hidden right-4 top-24 flex flex-col items-center justify-between py-10 bg-[#F5F1EB] h-[420px] w-[65vw] rounded-xl shadow-lg transition-all ease-in-out duration-500 z-40">
          <Link
            to="/"
            onClick={() => setIsMenuSelected(true)}
            className="text-xl text-[#1C1C1C] hover:text-[#7A4A2E]"
          >
            Home
          </Link>
          <Link
            to="/shop"
            onClick={() => setIsMenuSelected(true)}
            className="text-xl text-[#1C1C1C] hover:text-[#7A4A2E]"
          >
            Shop
          </Link>
          <Link
            to="/blog"
            onClick={() => setIsMenuSelected(true)}
            className="text-xl text-[#1C1C1C] hover:text-[#7A4A2E]"
          >
            Blog
          </Link>
          <Link
            to="/cart"
            onClick={() => setIsMenuSelected(true)}
            className="text-xl text-[#1C1C1C] hover:text-[#7A4A2E]"
          >
            Cart
          </Link>
          <Link
            to="/about"
            onClick={() => setIsMenuSelected(true)}
            className="text-xl text-[#1C1C1C] hover:text-[#7A4A2E]"
          >
            About
          </Link>
          <Link
            to="/contactUs"
            onClick={() => setIsMenuSelected(true)}
            className="text-xl text-[#1C1C1C] hover:text-[#7A4A2E]"
          >
            Contact Us
          </Link>
        </div>
      )}
    </>
  );
};

export default Header;
