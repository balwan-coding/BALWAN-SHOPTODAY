import React from "react";

function Loding() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="text-6xl font-bold text-blue-500 animate-spin-s">S</div>
        <p className="mt-4 text-lg text-gray-700">Loading ShopToday...</p>
      </div>
    </div>
  );
}

export default Loding;
