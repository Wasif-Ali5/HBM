import { createContext, useState , useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  
const [cart, setCart] = useState(() => {
try {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (e) {
    console.error("Error loading cart:", e);
    return [];
  }
});

useEffect(() => {
  try {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  } catch (e) {
    console.error("Error saving cartItems:", e);
  }
}, [cart]);

  function addToCart(product) {
    const existing = cart.find(
      (item) => item.id === product.id
    );

    if (existing) {
      const updatedCart = cart.map((item) =>
        item.id === product.id? { ...item, quantity: item.quantity + product.quantity }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, product]);
    }
  } 

  function removeFromCart(product) {
    setCart(cart.filter((item) => item.id !== product.id));
  }

  function increaseQuantity(product) {
    const updatedCart = cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  }

  function decreaseQuantity(product) {
    const updatedCart = cart
      .map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    setCart(updatedCart);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
