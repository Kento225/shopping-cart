import "./ItemCard.css";
import PropTypes from "prop-types";
import { cartAdd } from "../cart";
import { getCartSize } from "../cart";
import { useState } from "react";

export function ItemCard({ item, setCartCount }) {
  const [count, setCount] = useState(1);
  return (
    <div className="item-card">
      <img src={item.image}></img>
      <p className="title">{item.title}</p>
      <p className="price">{item.price}$</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          cartAdd({ ...item, count: count });
          setCartCount(getCartSize());
        }}
      >
        <button className="add-to-cart">Add to cart</button>
        <input
          type="number"
          className="count-input"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
          min="1"
          max="30"
        ></input>
      </form>
    </div>
  );
}
ItemCard.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  setCartCount: PropTypes.func.isRequired,
};
