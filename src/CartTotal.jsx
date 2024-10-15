import React from "react";

function CartTotal() {
  return (
    <div className="w-full p-4 ml-auto bg-white rounded-lg shadow-md sm:p-6 sm:w-3/4 lg:w-1/2">
      <div className="flex items-center p-2 mb-4 bg-gray-400">
        <span className="text-sm font-bold text-black sm:text-base">
          Cart Total
        </span>
      </div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-600 sm:text-base">Subtotal</span>
        <span className="text-sm text-gray-900 sm:text-base">$166.00</span>
      </div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-600 sm:text-base">Total</span>
        <span className="text-sm text-gray-900 sm:text-base">$166.00</span>
      </div>
      <button className="w-full py-3 text-sm text-white bg-red-500 rounded-lg sm:text-base">
        Proceed to Checkout
      </button>
    </div>
  );
}

export default CartTotal;
