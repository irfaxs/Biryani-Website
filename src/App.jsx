import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Checkout from "./pages/CartPage/Checkout";



function App() {
  // 🛒 cart state
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Navbar cartCount={cart.length} />

      {/* ✅ CORRECT WAY */}
      <Outlet context={{ cart, setCart }} />
     
    </>
  );
}

export default App;
``
