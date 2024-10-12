import React from "react";
import { Link } from "react-router-dom";

function NotFoun() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center text-center">
        <img
          src="https://clipart-library.com/images/pc5okRbni.png"
          alt="monky image"
          className="h-16"
        />
        <h1 className="text-6xl font-bold text-blue-600">404</h1>
        <p className="mt-4 text-2xl text-gray-700">Oops! Page not found</p>
        <p className="mt-2 text-gray-600 ">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 mt-6 text-lg text-white transition duration-300 bg-blue-600 rounded-full hover:bg-blue-700"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFoun;
