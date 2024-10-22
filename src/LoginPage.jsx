import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

function LoginPage() {
  function loginApi(values) {
    console.log(values.email, values.password, values.username);
  }

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
    username: Yup.string().required(),
  });

  const {
    handleSubmit,
    values,
    handleChange,
    errors,
    handleBlur,
    touched,
    isValid,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
    },
    onSubmit: loginApi,
    validationSchema: schema,
  });

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center bg-white rounded-lg sm:m-4 md:m-4 w-96">
        <h1 className="text-3xl font-bold">Welcome to ShopToday</h1>
        <h1 className="items-end font-mono text-3xl">Log in</h1>
        <form onSubmit={handleSubmit} className="flex flex-col m-2">
          <label htmlFor="email" className="text-lg ">
            Email
          </label>
          <input
            type="email"
            placeholder=""
            id="email"
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.email}
            autoComplete="email"
            required
            className="p-1 m-1 border border-black rounded-none "
          />
          {touched.email && errors.email && (
            <span className="text-red-600">{errors.email}</span>
          )}
          <label htmlFor="password" className="text-lg ">
            Password
          </label>
          <input
            type="password"
            placeholder=""
            id="password"
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.password}
            autoComplete="password"
            className="p-1 m-1 border border-black rounded-none "
          />
          {touched.password && errors.password && (
            <span className="text-red-600">{errors.password}</span>
          )}
          <label htmlFor="usename" className="text-lg ">
            UserName
          </label>
          <input
            type="text"
            placeholder=""
            id="usename"
            name="username"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.username}
            autoComplete="username"
            required
            className="p-1 m-1 border border-black rounded-none "
          />

          <button
            type="submit"
            disabled={!isValid}
            className="p-1 m-1 text-xl bg-red-500 disabled:bg-neutral-700 disabled:hover:none rounded-3xl hover:bg-red-600"
          >
            Log in
          </button>
        </form>
        <p className="m-1">
          Create a new account sign up
          <Link to="/SingupPage" className="text-blue-600 hover:underline ">
            signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
