import React, { useState } from "react";
import { ImCross } from "react-icons/im";

function CartTableRow({ product, quantity, onQuantityChange, onRemove }) {
  const formattedTotal = (product.price * quantity).toFixed(2);

  function handleChange(event) {
    const value = event.target.value;
    onQuantityChange(product.id, value === "" ? "" : +value);
  }

  function crossRemoveClick() {
    onRemove(product.id);
  }

  return (
    <tbody>
      <tr className="border-b">
        <td className="flex items-center py-2 sm:py-4">
          <div className="w-20 h-20 mr-2 sm:w-20 sm:h-20 sm:mr-4">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="object-cover w-full h-full hover:scale-150"
            />
          </div>
          <span className="hidden text-sm text-red-600 md:block sm:block sm:text-base">
            {product.title}
          </span>
        </td>
        <td className="py-2 text-sm sm:py-4 sm:text-base">{product.price}</td>
        <td className="py-2 sm:py-4">
          <input
            type="number"
            className="w-12 p-2 text-sm border rounded-lg sm:w-16 sm:text-base"
            value={quantity}
            onChange={handleChange}
          />
        </td>
        <td className="py-2 text-sm sm:py-4 sm:text-base">{formattedTotal}</td>
        <td>
          <button
            onClick={crossRemoveClick}
            className="py-2 text-sm hover:text-red-600 sm:py-4 sm:text-base"
          >
            <ImCross />
          </button>
        </td>
      </tr>
    </tbody>
  );
}

export default CartTableRow;
