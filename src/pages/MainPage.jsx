import { Header } from "../components/Header";
import "./MainPage.css";
import { Link } from "react-router-dom";

export function MainPage() {
  return (
    <>
      <Header />
      <div className="banner">Shop Everything: Find Your Perfect Fit!</div>
      <div className="categories">
        <Link
          to="/CategoryPage/electronics"
          id="electronics"
          className="category"
        >
          <p>Electronics</p>
        </Link>
        <Link to="/CategoryPage/jewelery" id="jewelery" className="category">
          <p>Jewelery</p>
        </Link>
        <Link
          to="/CategoryPage/men's clothing"
          id="mens-clothing"
          className="category"
        >
          <p>Men&apos;s Clothing</p>
        </Link>
        <Link
          to="/CategoryPage/women's clothing"
          id="womens-clothing"
          className="category"
        >
          <p>Women&apos;s Clothing</p>
        </Link>
      </div>
    </>
  );
}
