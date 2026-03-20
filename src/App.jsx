import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";

function App() {

  // 🔍 search state
  const [search, setSearch] = useState("");

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
      {/* ✅ Navbar should be here */}
      <Navbar
        cartCount={cart.length}
        search={search}
        setSearch={setSearch}
      />

      {/* ✅ Pages render here */}
      <Outlet context={{ cart, setCart, search }} />
     
    </>
  );
}

export default App;