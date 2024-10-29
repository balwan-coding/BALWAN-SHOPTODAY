import React from "react";
import FormikHOC from "./FormikHOC";

function Input({ name, label, id, error, touched, ...rest }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-lg">
        {label}
      </label>
      <input
        name={name}
        className="p-1 m-1 border border-black rounded-none"
        {...rest}
      />
      {touched && error && <span className="text-red-600">{error}</span>}
    </div>
  );
}

export const FormickInput = FormikHOC(Input);

export default Input;
