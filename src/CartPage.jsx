import React from "react";
import CartTable from "./CartTable";
import CartTotal from "./CartTotal";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

function CartPage() {
  return (
    <div className="p-4 mx-auto mt-2 mb-2 bg-white max-w-7xl md:auto sm:m-2 sm:p-6 md:p-8">
      <Link to="/">
        <HiArrowNarrowLeft className="text-3xl hover:text-red-700" />
      </Link>
      {/* <!-- Cart items table --> */}
      <div className="p-4 mb-6 bg-white rounded-lg shadow-md sm:p-6">
        <CartTable />
      </div>
      {/* <!-- Cart totals --> */}
      <CartTotal />
    </div>
  );
}

export default CartPage;
