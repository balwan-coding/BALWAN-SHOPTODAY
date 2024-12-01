import React from "react";
import CartTableRow from "./CartTableRow";
import { useEffect, useState } from "react";
import CouponCart from "./CouponCart";
import { withCart } from "./withProvider";

function CartTable({ cart, updateCard }) {
  const [quantityMap, setQuantityMap] = useState({}); // यहाँ डिफॉल्ट वैल्यू सेट की

  const cartToQuantityMap = () =>
    cart.reduce(
      (m, cartItem) => ({ ...m, [cartItem.product.id]: cartItem.quantity }),
      {}
    );

  useEffect(
    function () {
      setQuantityMap(cartToQuantityMap());
    },
    [cart]
  );

  function handleQuanityChange(productId, newValue) {
    const newQuantityMap = { ...quantityMap, [productId]: newValue };
    setQuantityMap(newQuantityMap);
  }

  function handleUpdetCartClick() {
    updateCard(quantityMap);
  }

  function handleRemove(productId) {
    const newQuantityMap = cartToQuantityMap();
    delete newQuantityMap[productId];
    updateCard(newQuantityMap);
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
        <tbody>
          {cart.map((cartItem) => (
            <CartTableRow
              key={cartItem.product.id}
              product={cartItem.product}
              quantity={quantityMap[cartItem.product.id] || cartItem.quantity}
              onQuantityChange={handleQuanityChange}
              onRemove={handleRemove}
            />
          ))}
        </tbody>
      </table>
      <CouponCart handleUpdetCartClick={handleUpdetCartClick} />
    </>
  );
}

export default withCart(CartTable);
