import React from "react";

function CouponCart({ handleUpdetCartClick }) {
  return (
    <div className="flex flex-col items-center justify-between mt-4 space-y-4 sm:flex-row sm:space-y-0">
      <div className="flex items-center w-full space-x-2 sm:space-x-4 sm:w-auto">
        <input
          type="text"
          placeholder="Coupon code"
          className="w-full p-2 text-sm border rounded-lg sm:w-64 sm:text-base"
        />
        <button className="w-full px-4 py-2 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600 sm:text-base sm:w-auto">
          Apply Coupon
        </button>
      </div>
      <button
        onClick={handleUpdetCartClick}
        className="w-full px-4 py-2 text-sm text-white bg-red-300 rounded-lg hover:bg-red-500 sm:text-base sm:w-auto"
      >
        Update Cart
      </button>
    </div>
  );
}

export default CouponCart;
