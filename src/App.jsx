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
import CartProvider from "./provider/CartProvider";

function App() {
  return (
    <>
      <UserProvider>
        <AlertProvider>
          <CartProvider>
            <Navbar />
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
                    element={<ProductorDetailCard />}
                  ></Route>

                  <Route
                    path="/CartPage"
                    element={
                      <UserRoute>
                        <CartPage />
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
          </CartProvider>
        </AlertProvider>
      </UserProvider>
    </>
  );
}

export default App;
