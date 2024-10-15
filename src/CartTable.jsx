import React from "react";
import CartTableRow from "./CartTableRow";

function CartTable() {
  return (
    <table className="w-full">
      <thead>
        <tr className="text-left text-gray-600 border-b">
          <th className="pb-2 sm:pb-4">Product</th>
          <th className="pb-2 sm:pb-4">Price</th>
          <th className="pb-2 sm:pb-4">Quantity</th>
          <th className="pb-2 sm:pb-4">Subtotal</th>
        </tr>
      </thead>
      <CartTableRow />
      <CartTableRow />
      <CartTableRow />
      <CartTableRow />
      <CartTableRow />
    </table>
  );
}

export default CartTable;
