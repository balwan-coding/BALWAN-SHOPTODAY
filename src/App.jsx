import React, { useState } from "react";
import ProductListPage from "./ProductListPage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import ProductorDetailCard from "./ProductorDetailCard";
function App() {
  const [cart, setCart] = useState({});
  function handleAddToCart(productId, count) {
    const oldCound = cart[productId] || 0;
    setCart({ ...cart, [productId]: oldCound + count });
  }

  const totalCount = Object.keys(cart).reduce(function (previous, current) {
    return previous + cart[current];
  }, 0);

  return (
    <>
      <Navbar productCount={totalCount} />
      <div className="grow">
        <Routes>
          <Route index element={<ProductListPage />}></Route>
          <Route
            path="/ProductorDetailCard/:id/"
            element={<ProductorDetailCard onAddToCart={handleAddToCart} />}
          ></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
