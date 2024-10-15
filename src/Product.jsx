import React from "react";
import { Link } from "react-router-dom";

function Product({ thumbnail, category, title, price, rating, id }) {
  return (
    <div className="max-w-md py-2 m-1 border-black shadow hover:border hover:-translate-y-2 hover:shadow-2xl">
      <div className="w-full aspect-square">
        <img
          className="object-cover w-full h-full"
          src={thumbnail}
          alt={title}
        />
      </div>
      <div className="m-2">
        <p className="text-gray-300">{category}</p>
        <h1 className="text-2xl">{title}</h1>
        <div className="flex">
          <span className="flex">
            <img className="h-6" src="https://codeyogi.io/star.png" />
            <img className="h-6" src="https://codeyogi.io/star.png" />
            <img className="h-6" src="https://codeyogi.io/star.png" />
            <img className="h-6" src="https://codeyogi.io/grey-star.png" />
          </span>
        </div>
        <p className="text-base text-gray-500 ">rs.{price}</p>
        <Link
          className="p-1 text-xl font-semibold hover:text-red-700"
          to={"/ProductorDetailCard/" + id}
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default Product;
