import React from "react";

function Button({ ...props }) {
  return (
    <button
      {...props}
      className="p-1 m-1 text-xl text-white bg-red-500 disabled:bg-neutral-700 disabled:hover:none rounded-3xl hover:bg-red-600"
    ></button>
  );
}

export default Button;
