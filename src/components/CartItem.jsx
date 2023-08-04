import "./CartItem.css";
import { editCart } from "../cart";
import PropTypes from "prop-types";

export function CartItem({ item, handleCartEdit, updateCartCount }) {
  function handleClick(id, operator) {
    editCart(id, operator);
    handleCartEdit();
    updateCartCount();
  }
  return (
    <div key={item.id} className="cart-item">
      <img src={item.image}></img>
      <div className="cart-item-text">
        <p>{item.title}</p>
        <p>{item.price}$/pcs</p>
        <p>Amount - {item.count}</p>
        <p>
          Price - <b>{item.count * item.price.toFixed(2)}$</b>
        </p>
        <button onClick={() => handleClick(item.id, "+")}>+</button>
        <button onClick={() => handleClick(item.id, "-")}>-</button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
  handleCartEdit: PropTypes.func.isRequired,
  updateCartCount: PropTypes.func.isRequired,
};
