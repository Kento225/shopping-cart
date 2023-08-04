import { cart } from "../cart";
import { getTotalPrice } from "../cart";
import "./CartPage.css";
import { Header } from "../components/Header";
import { CartItem } from "../components/CartItem";
import { useState } from "react";
import { CartContext } from "../CartContext";
import { useContext } from "react";

export function CartPage() {
  const [cartArr, setCartArr] = useState(cart);

  const { cartCount, updateCartCount } = useContext(CartContext);

  function handleCartEdit() {
    setCartArr(cart);
  }

  return (
    <>
      <Header cartCount={cartCount} />

      <div className="cart-page">
        <div className="cart-list">
          {cartArr.map((item) => {
            return (
              <CartItem
                item={item}
                updateCartCount={updateCartCount}
                handleCartEdit={handleCartEdit}
                key={item.id}
              />
            );
          })}
        </div>
        <div className="cart-total">
          <p>
            Total Price - <b>{getTotalPrice().toFixed(2)}$</b>
          </p>
        </div>
      </div>
    </>
  );
}
