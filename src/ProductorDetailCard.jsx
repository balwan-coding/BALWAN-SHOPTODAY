import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";
import { getProductData } from "./api";
import Loding from "./Loding";
import NotFoun from "./NotFoun";

function ProductorDetailCard({ onAddToCart }) {
  const id = +useParams().id;

  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  useEffect(
    function () {
      const p = getProductData(id);
      p.then(function (product) {
        setProduct(product);
        setLoading(false);
      }).catch(function () {
        setLoading(false);
      });
    },
    [id]
  );

  function hindalCountChange(event) {
    setCount(+event.target.value);
  }

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function handleButtonClick() {
    onAddToCart(id, count);
  }

  if (loading) {
    return <Loding />;
  }

  if (!product) {
    return <NotFoun />;
  }

  return (
    <>
      <div className="flex flex-col h-screen max-w-md overflow-scroll bg-transparent sm:mx-auto md:max-w-4xl md:flex ">
        <div className="flex flex-col mt-3 bg-white shadow-md sm:h-96 md:flex-row md:w-auto">
          <Link to="/">
            <HiArrowNarrowLeft className="text-3xl hover:text-red-700" />
          </Link>
          <div className="w-full aspect-square md:h-full md:aspect-square">
            <img
              className="object-cover w-full h-full"
              src={product.thumbnail}
            />
          </div>
          <div className="flex flex-col gap-2 p-2">
            <h1 className="text-2xl font-bold md:text-3xl ">{product.title}</h1>
            <p className="text-xl md:text-lg">Rs.{product.price}</p>
            <div className="flex">
              <img className="w-6" src="https://codeyogi.io/star.png" />
              <img className="w-6" src="https://codeyogi.io/star.png" />
              <img className="w-6" src="https://codeyogi.io/star.png" />
              <img className="w-6" src="https://codeyogi.io/grey-star.png" />
            </div>
            <p className="text-sm md:text-xl">{product.description}</p>

            <div className="">
              <button
                className="px-3 m-2 text-2xl font-bold text-center shadow"
                onClick={decrement}
              >
                -
              </button>
              <input
                id="numberInput"
                value={count}
                onChange={hindalCountChange}
                type="number"
                className="p-1 text-sm font-bold border border-gray-300 rounded-none md:text-xl w-14 focus:bg-orange-600"
              />
              <button
                className="px-3 m-2 text-2xl font-bold text-center shadow"
                onClick={increment}
              >
                +
              </button>
              <button
                onClick={handleButtonClick}
                className="w-32 p-1 mt-4 text-sm font-bold text-white bg-red-700 justify-self-end md:text-xl hover:bg-red-500"
              >
                Add to card
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between m-2 ">
          {id > 1 ? (
            <Link
              className="flex p-2 text-white bg-blue-950"
              to={"/ProductorDetailCard/" + (id - 1)}
            >
              <HiArrowNarrowLeft className="text-3xl text-white" /> Preview
            </Link>
          ) : (
            <div className="flex p-2 text-white cursor-not-allowed bg-slate-600">
              <HiArrowNarrowLeft className="text-3xl text-white" /> Preview
            </div>
          )}
          <Link
            className="flex p-2 text-white bg-blue-950"
            to={"/ProductorDetailCard/" + (id + 1)}
          >
            Next <HiArrowRight className="text-3xl text-white" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProductorDetailCard;
