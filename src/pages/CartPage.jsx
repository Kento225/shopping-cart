import { cart } from "../cart";

export function CartPage() {
  return (
    <div className="cart-page">
      {cart.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.count}</p>
          </div>
        );
      })}
    </div>
  );
}
