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
      <div className="flex items-center">
        <Link
          className="p-2 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-500"
          to="/LoginPage"
        >
          login/SignUp
        </Link>
        <Link to="/CartPage" className="flex items-center">
          <span className="relative flex items-center justify-center p-2 overflow-hidden font-bold text-white bg-red-700 rounded-full w-9 md:w-9 sm:w-9 -top-5 -right-16 md:-right-20 sm:-right-20">
            {productCount}
          </span>
          <SiShopee className="m-1 text-4xl cursor-pointer md:text-6xl hover:text-red-500" />
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
