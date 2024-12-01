import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import logo from "/logo-shoptoday.webp";
import { Link } from "react-router-dom";
import { withCart, withUser } from "./withProvider";

function Navbar({ cartCount, setUser }) {
  function handleLogOut() {
    localStorage.removeItem("token");
    setUser(undefined);
  }
  return (
    <nav className="flex items-center justify-between px-6 py-2 bg-white">
      <div className="w-12 sm:w-16 md:w-16 aspect-square">
        <img className="object-cover w-full h-full" src={logo} alt="logo" />
      </div>
      <div className="flex items-center">
        <button className="bg-indigo-600" onClick={handleLogOut}>
          Logout
        </button>
        <Link
          className="p-2 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-500"
          to="/LoginPage"
        >
          login/SignUp
        </Link>
        <Link to="/CartPage" className="flex items-center">
          <span className="relative flex text-2xl font-bold text-orange-600 left-11 ">
            {cartCount}
          </span>
          <CiShoppingCart className="m-1 text-6xl cursor-pointer md:text-6xl hover:text-red-500" />
        </Link>
      </div>
    </nav>
  );
}
export default withUser(withCart(Navbar));
