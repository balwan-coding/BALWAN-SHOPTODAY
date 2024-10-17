import React from "react";
import { SiShopee } from "react-icons/si";
import logo from "/logo-shoptoday.webp";
import { Link } from "react-router-dom";

function Navbar({ productCount }) {
  return (
    <nav className="flex items-center justify-between px-6 py-2 bg-white">
      <div className="w-12 sm:w-16 md:w-16 aspect-square">
        <img className="object-cover w-full h-full" src={logo} alt="logo" />
      </div>
      <div className="px-3">
        <Link to="/CartPage">
          <span className="box-border relative w-3 h-3 p-2 px-4 overflow-hidden font-bold text-white bg-red-700 top-5 left-6 md:left-10 rounded-3xl">
            {productCount}
          </span>
          <SiShopee className="m-1 text-4xl cursor-pointer md:text-6xl hover:text-red-500" />
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
