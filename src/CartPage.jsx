import React, { useState } from "react";
import CartTable from "./CartTable";
import CouponCart from "./CouponCart";
import CartTotal from "./CartTotal";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getProductData } from "./api";
import { dummyProducts } from "./DummyData.js";
// import { ImCross } from "react-icons/im";
import Loding from "./Loding";

function CartPage({ cart, updateCard }) {
  const [products, setProduct] = useState([]);
  const [loding, setLoding] = useState(true);

  const productIds = Object.keys(cart);

  useEffect(
    function () {
      setLoding(true);
      const myProductPromice = productIds.map(function (id) {
        return getProductData(id);
      });
      Promise.all(myProductPromice).then(function (products) {
        setProduct(products);
        setLoding(false);
      });
    },
    [cart]
  );

  function handleUpdetCart() {
    updateCard(localCart);
  }

  if (loding) {
    return <Loding />;
  }

  return (
    <div className="p-4 mx-auto mt-2 mb-2 bg-white max-w-7xl md:auto sm:m-2 sm:p-6 md:p-8">
      <Link to="/">
        <HiArrowNarrowLeft className="text-3xl hover:text-red-700" />
      </Link>
      {/* <!-- Cart items table --> */}
      <div className="p-4 mb-6 bg-white rounded-lg shadow-md sm:p-6">
        <CartTable products={products} cart={cart} updateCard={updateCard} />
      </div>
      {/* <!-- Cart totals --> */}
      <CartTotal />
    </div>
  );
}

export default CartPage;
