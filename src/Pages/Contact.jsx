import React from "react";
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import TopImage from "../components/TopImage";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const profileImages = ["/images/pic.jpg", "/images/pic.jpg", "/images/pic.jpg"];
  const navigate = useNavigate();

  /*const handleSubmit = () => {
    navigate("/feedback-submitted");
  };*/

  return (
    <>
      <TopImage
        imageSrc="/images/b2.jpg"
        mainHeading="#Let's_talk"
        subText="Leave a message. We love to hear from you"
      />

      <div className="my-10 flex flex-col md:flex-row justify-center items-center gap-8 w-full">
        <div className="w-[80%] md:w-[40%]">
          <p className="text-[16px] text-charcoal/70">Get in Touch</p>

          <h3 className="my-3 text-charcoal text-2xl md:text-3xl tracking-wide font-semibold">
            Visit one of our agency locations or contact us today
          </h3>

          <h4 className="tracking-wide text-charcoal text-[16px] font-semibold">
            Head office
          </h4>

          <p className="mt-3 text-[16px] tracking-wide text-charcoal/70">
            <FaMapMarkerAlt className="inline mr-2 text-leather" />
            Block B Main Road, Faisal Town, Lahore.
          </p>

          <p className="mt-2 text-[16px] tracking-wide text-charcoal/70">
            <FaEnvelope className="inline mr-2 text-leather" />
            <a
                href="mailto:contact@example.com"
                className="text-leather hover:underline">
               meesumshah870@gmail.com
             </a>
          </p>

          <p className="mt-2 text-[16px] tracking-wide text-charcoal/70">
            <FaPhone className="inline mr-2 text-leather" />
            <a href="tel:+923001234567"
                className="text-leather hover:underline">
                    +92 3099414044 </a>
          </p>   
          
          <p className="mt-2 text-[16px] tracking-wide text-charcoal/70">
            <FaWhatsapp className="inline mr-2 text-leather" />
            <a href="https://wa.me/923099414044"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-leather hover:underline">
                   Chat On Whatsapp  </a>
          </p>             

          <p className="my-2 text-[16px] tracking-wide text-charcoal/70">
            <FaClock className="inline mr-2 text-leather" />
            Monday to Saturday: 9:00am – 9:00pm
          </p>

        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.688847296726!2d74.30430912403948!3d31.477744449249496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903f99d0b0f07%3A0xab5c4fd13ce16818!2sKotha%20Pind%20Block%20B%20Faisal%20Town%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1766826287378!5m2!1sen!2s" 
          className="w-[85%] md:w-[40%] rounded-lg shadow-lg"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>

      <div className="my-25 flex flex-col md:flex-row justify-center items-center gap-8 w-full">
        <div className="my-10 flex flex-col gap-4 w-[90%] md:w-[40%]">
          <p className="text-charcoal/70 text-[16px]">Leave a message</p>

          <h3 className="text-charcoal text-2xl md:text-3xl tracking-wide font-semibold">
            We love to hear from you
          </h3>

          <input
            className="outline-none border border-charcoal/30 rounded-md py-2 px-3"
            type="text"
            placeholder="Your name"
          />

          <input
            className="outline-none border border-charcoal/30 rounded-md py-2 px-3"
            type="email"
            placeholder="E-mail"
          />

          <input
            className="outline-none border border-charcoal/30 rounded-md py-2 px-3"
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            className="outline-none border border-charcoal/30 rounded-lg py-2 px-3"
          ></textarea>

          <button
            //onClick={handleSubmit}
            className="transition-all duration-300 bg-leather text-cream cursor-pointer rounded-md shadow-lg px-6 py-3 hover:bg-[#088178]"
          >
            Submit
          </button>
        </div>

        <div className="flex flex-col items-center gap-6 w-[90%] md:w-[40%]">
          {profileImages.map((src, index) => (
            <div
              key={index}
              className="w-[70%] flex items-center gap-6 "
            >
              <img src={src} 
              className="w-20 h-18 rounded-full object-cover"
              alt="person-profile-pic" />

              <div>
                <p className="tracking-wide text-xl text-charcoal">
                  Wasif Raza
                </p>
                <p className="tracking-wide text-[16px] text-charcoal/70">
                  Senior Marketing Manager
                </p>
                <p className="tracking-wide text-[16px] text-charcoal/70">
                  Phone: +000 123 0178
                </p>
                <p className="tracking-wide text-[16px] text-charcoal/70">
                  Email: contact@example.com
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ContactPage;
