import { createContext, useContext, useEffect, useState } from "react";
import { 
  CART_KEY, 
  addToCartFn, 
  removeFromCartFn, 
  decreaseQtyFn, 
  getTotalFn, 
  getTotalItemsFn 
} from "../utils/cartFunctions";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const stored = localStorage.getItem(CART_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (err) {
      console.error("Error parsing cart:", err);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => addToCartFn(product, prev));
  };

  const removeFromCart = (id) => {
    setCart((prev) => removeFromCartFn(id, prev));
  };

  const decreaseQty = (id) => {
    setCart((prev) => decreaseQtyFn(id, prev));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem(CART_KEY);
  };

  const getTotal = () => {
    return getTotalFn(cart);
  };

  const getTotalItems = () => {
    return getTotalItemsFn(cart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        decreaseQty,
        clearCart,
        getTotal,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);
