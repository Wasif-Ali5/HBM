import React, { useContext } from "react";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import { CartContext } from "../CartContext";
import TopImage from "../components/TopImage";

const CartPage = () => {
  const {
    cart,
    setCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (acc, product) => acc + product.quantity * Number(product.price),
    0
  );

  const shippingCost = cart.length === 0 ? 0 : 20;

  function handleOrderConfirmation() {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }
  
  let message = "🛒 *New Order from Website* 🛒\n\n";
  cart.forEach((product, index) => {
    message += `📌 *Item ${index + 1}:* ${product.name}\n`;
    message += `   Quantity: ${product.quantity}\n`;
    message += `   Price: Rs ${product.price}\n\n`;
  });
  message += `💰 *Subtotal:* Rs ${totalPrice.toFixed(2)}\n`;
  message += `🚚 *Shipping:* Rs ${shippingCost}\n`;
  message += `🧾 *Total:* Rs ${(totalPrice + shippingCost).toFixed(2)}\n\n`;
  message += "📞 Please confirm the order. Thank you!";

  const encodedMessage = encodeURIComponent(message);
  const phoneNumber = "923099414044";
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  setCart([]);
}


  return (
    <>
      <TopImage
        imageSrc="/images/b2.jpg"
        mainHeading="#Cart"
        subText="Handcrafted leather essentials"
      />

      {/* Cart Table */}
      <div className="w-full flex justify-center overflow-x-auto bg-[#F5F1EB]">
        <div className="min-w-[1000px] md:w-[90%]">

          {/* Header */}
          <div className="mt-16 mb-6 grid grid-cols-6 items-center
            border border-[#D6CFC7] rounded-md px-4 py-3 text-center bg-[#F5F1EB]">
            {["Remove", "Image", "Product", "Price", "Quantity", "Subtotal"].map(
              (head, i) => (
                <p
                  key={i}
                  className="text-[#1C1C1C] font-semibold tracking-wide"
                >
                  {head}
                </p>
              )
            )}
          </div>

          {/* Items */}
          {cart.map((product, index) => (
            <div
              key={product.id || index}
              className="grid grid-cols-6 items-center px-4 py-4 text-center
                border border-[#D6CFC7] rounded-md mb-4 bg-white"
            >
              <button onClick={() => removeFromCart(product)}>
                <FaTimes className="text-[#7A4A2E] hover:text-[#5A3521]" />
              </button>

              <img
                className="h-28 mx-auto rounded-md border border-[#D6CFC7]"
                src={product.src}
                alt={product.name}
              />

              <p className="text-[#1C1C1C] font-medium">
                {product.name}
              </p>

              <p className="text-[#7A4A2E] font-medium">
                Rs {product.price}
              </p>

              <div className="flex items-center justify-center gap-3">
                <button onClick={() => decreaseQuantity(product)}>
                  <FaMinus className="text-[#7A4A2E]" />
                </button>

                <span className="font-semibold text-[#1C1C1C]">
                  {product.quantity}
                </span>

                <button onClick={() => increaseQuantity(product)}>
                  <FaPlus className="text-[#7A4A2E]" />
                </button>
              </div>

              <p className="text-[#7A4A2E] font-semibold">
                Rs {(product.price * product.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="mx-auto md:ml-20 my-16 px-6 py-6
        border border-[#D6CFC7] rounded-lg w-[90%] md:w-[30%] bg-[#F5F1EB]">

        <h3 className="text-2xl mb-4 text-[#1C1C1C] font-semibold">
          Order Summary
        </h3>

        {[
          ["Subtotal", totalPrice.toFixed(2)],
          ["Shipping", shippingCost],
          ["Total", (totalPrice + shippingCost).toFixed(2)],
        ].map(([label, value], i) => (
          <div key={i} className="flex gap-2 mb-3">
            <div className="w-[50%] px-3 py-2 bg-white rounded-md text-[#1C1C1C]">
              {label}
            </div>
            <div className="w-[50%] px-3 py-2 bg-white rounded-md text-[#1C1C1C]">
              Rs {value}
            </div>
          </div>
        ))}

        <button
          onClick={handleOrderConfirmation}
          className="mt-5 w-full
            bg-[#7A4A2E] text-[#F5F1EB]
            py-3 rounded-md tracking-wide
            shadow-md transition-all duration-300
            hover:bg-[#5A3521]"
        >
          Confirm Order
        </button>
      </div>
    </>
  );
};

export default CartPage;
