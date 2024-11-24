import React from "react";
import * as Yup from "yup";
import { withFormik } from "formik";
import { Link } from "react-router-dom";
import Input from "./Input";
import axios from "axios";
import Button from "./Button";
import { withAlert } from "./withProvider";
import { withUser } from "./withProvider";

function singupApi(values, bag) {
  axios
    .post("https://myeasykart.codeyogi.io/signup", {
      email: values.email,
      password: values.password,
      full_Name: values.fullName,
    })
    .then((response) => {
      const { user, token } = response.data;
      localStorage.setItem("token", token);
      bag.props.setUser(user);
    })
    .catch(() => {
      bag.props.setUser({
        type: "error",
        message: "login is faild",
      });
    });
}

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
  fullName: Yup.string().required(),
});

const initialValues = {
  email: "",
  password: "",
  fullName: "",
};

function SingupPage({
  handleSubmit,
  handleChange,
  values,
  errors,
  touched,
  handleBlur,
}) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center bg-white rounded-lg sm:m-4 md:m-4 w-96">
        <h1 className="text-3xl font-bold">Welcome to ShopToday</h1>
        <h1 className="items-end font-mono text-3xl"> signup</h1>

        <form onSubmit={handleSubmit} className="flex flex-col m-2">
          <Input
            values={values.email}
            error={errors.email}
            touched={touched.email}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Email address"
            id="email-address"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Email or Username"
          />
          <Input
            values={values.password}
            error={errors.password}
            touched={touched.password}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Password"
            id="xyz"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            placeholder="Password"
          />
          <Input
            error={errors.fullName}
            touched={touched.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            label="FullName"
            id="fullName"
            name="fullName"
            type="text"
            required
            autoComplete="current-fullName"
            placeholder="FullNam"
          />
          <Button type="submit">signup</Button>
        </form>

        <p className="m-1">
          Create a new account{" "}
          <Link to="/LoginPage" className="text-blue-600 hover:underline ">
            {" "}
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

const formilSignup = withFormik({
  validationSchema: schema,
  initialValues: initialValues,
  handleSubmit: singupApi,
})(SingupPage);

export default withAlert(withUser(formilSignup));
