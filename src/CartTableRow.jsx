import React, { useState } from "react";

function CartTableRow({ productCount }) {
  const [quantity, setQuantity] = useState(productCount);

  function handlequantityChan(event) {
    setQuantity(event.target.value);
    +setQuantity();
  }

  if (quantity < 0) {
    setQuantity("");
  }
  return (
    <tbody>
      <tr className="border-b">
        <td className="flex items-center py-2 sm:py-4">
          <div className="w-20 h-20 mr-2 sm:w-20 sm:h-20 sm:mr-4">
            <img
              src="https://m.media-amazon.com/images/I/613DO72D-ZL._AC_UL480_FMwebp_QL65_.jpg"
              alt="Black Printed Coffee Mug"
              className="object-cover w-full h-full"
            />
          </div>
          <span className="hidden text-sm text-red-600 md:block sm:block sm:text-base">
            Black Printed Coffee Mug
          </span>
        </td>
        <td className="py-2 text-sm sm:py-4 sm:text-base">$15.00</td>
        <td className="py-2 sm:py-4">
          <input
            type="number"
            className="w-12 p-2 text-sm border rounded-lg sm:w-16 sm:text-base"
            value={quantity}
            onChange={handlequantityChan}
          />
        </td>
        <td className="py-2 text-sm sm:py-4 sm:text-base">$30.00</td>
      </tr>
    </tbody>
  );
}

export default CartTableRow;
