import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { FormickInput } from "./Input";

function LoginPage() {
  function loginApi(values) {
    console.log(values.email, values.password, values.username);
  }

  const schema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    username: Yup.string().required("Username is required"),
  });

  const initialValues = {
    email: "",
    password: "",
    username: "",
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center bg-white rounded-lg sm:m-4 md:m-4 w-96">
        <h1 className="text-3xl font-bold">Welcome to ShopToday</h1>
        <h1 className="items-end font-mono text-3xl">Log in</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          validateOnMount
          onSubmit={loginApi}
        >
          <Form className="flex flex-col m-2">
            <FormickInput
              type="email"
              id="xyz"
              placeholder="email"
              name="email"
              autoComplete="email"
              required
              label="Email"
            />

            <FormickInput
              type="password"
              id="wxy"
              placeholder="Enter your password"
              name="password"
              autoComplete="password"
              required
              label="Password"
            />

            <FormickInput
              type="text"
              placeholder="username"
              name="username"
              autoComplete="true"
              required
              label="Username"
              id="user"
            />
            <button
              type="submit"
              className="p-1 m-1 text-xl bg-red-500 disabled:bg-neutral-700 disabled:hover:none rounded-3xl hover:bg-red-600"
            >
              Log in
            </button>
          </Form>
        </Formik>
        <p className="m-1">
          Create a new account{" "}
          <Link to="/SingupPage" className="text-blue-600 hover:underline ">
            signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
