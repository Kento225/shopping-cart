import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import "../main.css";
import { ItemCard } from "../components/ItemCard";
import { Header } from "../components/Header";
import "./CategoryPage.css";
import { CartContext } from "../CartContext";

export function CategoryPage() {
  const { category } = useParams();

  const [items, setItems] = useState([]);

  const { cartCount, updateCartCount } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`, {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  return (
    <>
      <Header cartCount={cartCount} />
      <h1>{category.toUpperCase()}</h1>
      <div className="category-page">
        {items.map((item) => {
          return (
            <ItemCard
              item={item}
              key={item.id}
              updateCartCount={updateCartCount}
            />
          );
        })}
      </div>
    </>
  );
}
