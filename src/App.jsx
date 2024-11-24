import React, { useState } from "react";
import ProductListPage from "./ProductListPage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import ProductorDetailCard from "./ProductorDetailCard";
import CartPage from "./CartPage";
import LoginPage from "./LoginPage";
import SingupPage from "./SignupPage";
import AuthRoute from "./AuthRoute";
import UserRoute from "./UserRoute";
import Alert from "./Alert";
import AlertProvider from "./provider/AlertProvider";
import UserProvider from "./provider/UserProvider";

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
      <UserProvider>
        <AlertProvider>
          <Navbar productCount={totalCount} />
          <Alert />
          <div className="flex flex-col">
            <div className="">
              <Routes>
                <Route
                  index
                  element={
                    <UserRoute>
                      <ProductListPage />{" "}
                    </UserRoute>
                  }
                ></Route>
                <Route
                  path="/ProductorDetailCard/:id/"
                  element={
                    <ProductorDetailCard onAddToCart={handleAddToCart} />
                  }
                ></Route>

                <Route
                  path="/CartPage"
                  element={
                    <UserRoute>
                      <CartPage cart={cart} updateCard={updateCard} />
                    </UserRoute>
                  }
                ></Route>
                <Route
                  path="/LoginPage"
                  element={
                    <AuthRoute>
                      <LoginPage />
                    </AuthRoute>
                  }
                ></Route>

                <Route
                  path="/SingupPage"
                  element={
                    <AuthRoute>
                      <SingupPage />
                    </AuthRoute>
                  }
                ></Route>
              </Routes>
            </div>
          </div>
          <Footer />
        </AlertProvider>
      </UserProvider>
    </>
  );
}

export default App;
