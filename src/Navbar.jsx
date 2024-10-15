import React from "react";
import { SiShopee } from "react-icons/si";
import logo from "/logo-shoptoday.webp";
import { Link } from "react-router-dom";

function Navbar({ productCount }) {
  return (
    <nav className="flex items-center justify-between px-6 py-2 bg-white">
      {/* <h1 className="text-3xl font-semibold text-pink-500">TODAYSHOP</h1> */}
      <img className="w-16" src={logo} alt="logo" />
      <div className="px-3">
        <Link to="/CartPage">
          <span className="relative p-2 px-4 font-bold text-white bg-red-700 top-5 left-6 md:left-10 rounded-3xl">
            {productCount}
          </span>
          <SiShopee className="m-1 text-4xl cursor-pointer md:text-6xl hover:text-red-500" />
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
