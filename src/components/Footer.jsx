import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="mb-5 w-full gap-6 md:gap-0 h-auto flex flex-col items-center md:flex-row md:flex-wrap md:justify-evenly md:items-start bg-gray-50 py-10">
        
        <div className="w-full md:w-auto text-center md:text-left">
          <img
            className="my-6 md:my-4 mx-auto md:mx-0 w-16 h-10 md:h-15 md:w-20"
            src="/images/logo3.jpg"
            alt="Logo Image"
            loading="lazy"

          />

          <h5 className="my-2 font-semibold text-black">Contact</h5>

          <p className="my-1 text-gray-500">
            <span className="font-semibold text-black">Address:</span>{" "}
            562 Faisal Town, Street 32, Lahore
          </p>

        <p className="my-1 text-gray-500">
            <span className="font-semibold text-black">Phone:</span>{" "}
            <a
           href="https://wa.me/923099414044?text=Hello!%20I%20want%20to%20inquire%20about%20your%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#088178] hover:underline">
                    0309-9414044
            </a>
        </p>

          <p className="my-1 text-gray-500">
            <span className="font-semibold text-black">Hours:</span>{" "}
            10:00 - 8:00, Mon to Sat
          </p>

          <h5 className="mt-4 mb-2 font-semibold text-black">Follow Us</h5>
          <div className="flex justify-center md:justify-start gap-4">
            <FaFacebook className="text-gray-500 text-xl hover:text-[#088178] cursor-pointer transition" />
            <FaInstagram className="text-gray-500 text-xl hover:text-[#088178] cursor-pointer transition" />
            <FaTwitter className="text-gray-500 text-xl hover:text-[#088178] cursor-pointer transition" />
            <FaYoutube className="text-gray-500 text-xl hover:text-[#088178] cursor-pointer transition" />
          </div>
        </div>

        {/* About */}
        <div className="w-full md:w-auto text-center md:text-left mt-6 md:mt-0">
          <h5 className="font-semibold mb-3 text-black">About</h5>
          {["About us", "Delivery Information", "Privacy Policy", "Terms & Conditions", "Contact Us"].map(
            (item, i) => (
              <p
                key={i}
                className="mb-1 text-gray-500 hover:text-[#088178] cursor-pointer transition"
              >
                {item}
              </p>
            )
          )}
        </div>

        {/* Account */}
        <div className="w-full md:w-auto text-center md:text-left mt-6 md:mt-0">
          <h5 className="font-semibold mb-3 text-black">My Account</h5>
          {["Sign In", "View Cart", "My Wishlist", "Track My Order", "Help"].map(
            (item, i) => (
              <p
                key={i}
                className="mb-1 text-gray-500 hover:text-[#088178] cursor-pointer transition"
              >
                {item}
              </p>
            )
          )}
        </div>

        {/* App */}
        <div className="w-full md:w-auto text-center md:text-left mt-6 md:mt-0">
          <h5 className="font-semibold mb-3 text-black">Install App</h5>
          <p className="text-gray-500">From App Store or Google Play</p>

          <div className="mx-auto flex justify-center md:justify-start gap-3">
            <img
              className="my-3 border border-gray-300 rounded-md hover:scale-105 transition"
              src="/images/app.jpg"
              alt="App Store"
              loading="lazy"
            />
            <img
              className="my-3 border border-gray-300 rounded-md hover:scale-105 transition"
              src="/images/play.jpg"
              alt="Play Store"
              loading="lazy"
            />
          </div>

          <p className="text-gray-500">Secure Payment Gateways</p>
          <img
            className="my-3 mx-auto md:mx-0"
            src="/images/pay.png"
            alt="payment methods"
            loading="lazy"
          />
        </div>
      </div>

      <p className="my-6 text-gray-500 text-center text-sm">
        © 2025 HBM — CopyWrite 2025
      </p>
    </>
  );
};

export default Footer;
