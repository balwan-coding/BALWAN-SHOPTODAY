import React from "react";
import { useField } from "formik";

function FormikHOC(IncomingComponent) {
  function outgoingComponent({ name, ...rest }) {
    const [field, meta] = useField(name);

    const { onBlur, onChange, value } = field;
    const { error, touched } = meta;

    return (
      <IncomingComponent
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        name={name}
        touched={touched}
        error={error}
        className="p-1 m-1 border border-black rounded-none"
        {...rest}
      />
    );
  }

  return outgoingComponent;
}

export default FormikHOC;
