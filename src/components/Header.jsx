import "./Header.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import shoppingCartIcon from "../assets/shopping-cart-outline-svgrepo-com.svg";

export function Header({ cartCount }) {
  return (
    <div className="header">
      <div className="left-side">
        <Link to="/" className="logo">
          REALSHOP
        </Link>
      </div>
      <div className="right-side">
        <Link to="/CartPage">
          <p className="cart-count">{cartCount}</p>
          <img src={shoppingCartIcon} className="cart-icon"></img>
        </Link>
      </div>
    </div>
  );
}
Header.propTypes = {
  cartCount: PropTypes.number.isRequired,
};
