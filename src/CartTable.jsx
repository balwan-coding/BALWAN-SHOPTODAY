import React from "react";
import CartTableRow from "./CartTableRow";
import { useEffect, useState } from "react";
import CouponCart from "./CouponCart";

function CartTable({ products, cart, updateCard }) {
  const [localCart, setLocalCalrt] = useState(cart);

  useEffect(
    function () {
      setLocalCalrt(cart);
    },
    [cart]
  );

  function handleQuantityChange(productid, newValue) {
    const newLocalCart = { ...localCart, [productid]: newValue };
    setLocalCalrt(newLocalCart);
  }

  function handleRemove(productId) {
    const newCart = { ...cart };
    delete newCart[productId];
    updateCard(newCart);
  }

  function handleUpdetCartClick() {
    updateCard(localCart);
  }

  return (
    <>
      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-600 border-b">
            <th className="pb-2 sm:pb-4">Product</th>
            <th className="pb-2 sm:pb-4">Price</th>
            <th className="pb-2 sm:pb-4">Quantity</th>
            <th className="pb-2 sm:pb-4">Subtotal</th>
          </tr>
        </thead>
        {products.map(function (p) {
          return (
            <CartTableRow
              key={p.id}
              product={p}
              quantity={localCart[p.id]}
              onQuantityChange={handleQuantityChange}
              onRemove={handleRemove}
            />
          );
        })}
      </table>
      <CouponCart handleUpdetCartClick={handleUpdetCartClick} />
    </>
  );
}

export default CartTable;
