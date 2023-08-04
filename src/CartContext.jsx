import { createContext, useState } from "react";
import { getCartSize } from "./cart";
import PropTypes from "prop-types";

export const CartContext = createContext();
export function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(getCartSize());
  function updateCartCount() {
    setCartCount(getCartSize());
  }
  return (
    <CartContext.Provider value={{ cartCount, updateCartCount }}>
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
