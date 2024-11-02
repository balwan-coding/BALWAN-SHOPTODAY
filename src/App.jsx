import React, { useState } from "react";
import ProductListPage from "./ProductListPage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import ProductorDetailCard from "./ProductorDetailCard";
import CartPage from "./CartPage";
import LoginPage from "./LoginPage";
import SingupPage from "./SignupPage";

function App() {
  const sevedDataString = localStorage.getItem("my-cart") || "{}";
  const sevedData = JSON.parse(sevedDataString);
  const [cart, setCart] = useState(sevedData);

  function handleAddToCart(productId, count) {
    const oldCound = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCound + count };
    updateCard(newCart);
  }

  function updateCard(newCart) {
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("my-cart", cartString);
  }

  const totalCount = Object.keys(cart).reduce(function (previous, current) {
    return previous + cart[current];
  }, 0);

  return (
    <>
      <Navbar productCount={totalCount} />
      <div className="flex flex-col">
        <div className="grow">
          <Routes>
            <Route index element={<ProductListPage />}></Route>
            <Route
              path="/ProductorDetailCard/:id/"
              element={<ProductorDetailCard onAddToCart={handleAddToCart} />}
            ></Route>

            <Route
              path="/CartPage"
              element={<CartPage cart={cart} updateCard={updateCard} />}
            ></Route>
            <Route path="/LoginPage" element={<LoginPage />}></Route>
            <Route path="/SingupPage" element={<SingupPage />}></Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
