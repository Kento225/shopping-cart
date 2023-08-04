import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { CategoryPage } from "./pages/CategoryPage";
import { CartPage } from "./pages/CartPage";
import { CartProvider } from "./CartContext"; // Import the CartProvider

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/CategoryPage/:category",
    element: <CategoryPage />,
  },
  {
    path: "/CartPage",
    element: <CartPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
