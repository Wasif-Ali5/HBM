import React, { useContext, useState } from "react";
import TopImage from "../components/TopImage";
import { useParams } from "react-router-dom";
import { ProductImages, ArrivalImages } from "../assets/data/products";
import { CartContext } from "../CartContext";

const ProductDetails = () => {
  const [size, setSize] = useState("medium");
  const { id } = useParams();
  const { addToCart, removeFromCart } = useContext(CartContext);
  const [isActive, setIsActive] = useState(false);
  const [quantity, setQuantity] = useState(1);

  let product = ProductImages.find((p) => p.id === Number(id));
  if (!product) {
    product = ArrivalImages.find((p) => p.id === Number(id));
  }

  if (!product) {
    return (
      <div className="text-center my-32">
        <h2 className="text-3xl font-semibold text-[#7A4A2E]">
          Product not found
        </h2>
      </div>
    );
  }

  return (
    <>
      <TopImage
        imageSrc="/images/b1.jpg"
        mainHeading="#stayhome"
        subText="Premium handcrafted leather essentials"
      />

      <div className="my-20 flex flex-col md:flex-row justify-center items-start
        gap-10 px-6 md:px-16 bg-[#F5F1EB]">

        {/* Product Image */}
        <img
          className="w-[90%] md:w-[28%] h-[380px]
            rounded-lg shadow-md border border-[#D6CFC7]"
          src={product.src}
          alt={product.name}
        />

        {/* Details */}
        <div className="flex flex-col w-full md:w-[40%] gap-4">
          <p className="text-sm text-[#1C1C1C]">
            Home / <span className="text-[#7A4A2E]">{product.name}</span>
          </p>

          <h3 className="text-3xl font-semibold text-[#1C1C1C]">
            {product.name}
          </h3>

          <p className="text-3xl font-bold text-[#7A4A2E]">
            Rs {product.price}
          </p>

          {/* Size + Button */}
          <div className="flex flex-wrap gap-4 items-center">
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="outline-none px-4 py-2
                border border-[#D6CFC7]
                rounded-md bg-white text-[#1C1C1C]"
            >
              <option disabled value="">
                Select Size
              </option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="xl-large">XL-Large</option>
            </select>

            <button
              className={`transition-all duration-300 px-6 py-2 rounded-md
                shadow-md text-[#F5F1EB]
                ${
                  isActive
                    ? "bg-[#5A3521]"
                    : "bg-[#7A4A2E] hover:bg-[#5A3521]"
                }`}
              onClick={() => {
                isActive
                  ? removeFromCart(product)
                  : addToCart({ ...product, size, quantity });
                setIsActive(!isActive);
              }}
            >
              {isActive ? "Remove from Cart" : "Add to Cart"}
            </button>
          </div>

          {/* Quantity */}
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-24 border border-[#D6CFC7]
              rounded-md py-2 px-3 outline-none
              text-[#1C1C1C] bg-white"
          />

          {/* Description */}
          <h3 className="text-2xl font-semibold text-[#1C1C1C] mt-6">
            Product Details
          </h3>
          <p className="text-[#1C1C1C] leading-relaxed opacity-80">
            Crafted with premium leather and refined detailing, this product
            offers durability, comfort, and timeless elegance. Designed for
            everyday use while maintaining a luxurious feel.
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
