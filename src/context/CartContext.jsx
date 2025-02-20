import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const cartCopy = [...prevCart];
      const existingItem = cartCopy.find((item) => item.id === pizza.id);
  
      if (existingItem) {
        existingItem.count += 1;
      } else {
        cartCopy.push({ ...pizza, count: 1 });
      }
  
      return cartCopy;
    });
  };

  const updateQuantity = (id, delta) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((item) =>
          item.id === id
            ? { ...item, count: Math.max(item.count + delta, 0) }
            : item
        )
        .filter((item) => item.count > 0);
  
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};