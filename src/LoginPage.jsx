import React from "react";
import * as Yup from "yup";
import { withFormik } from "formik";
import { Link } from "react-router-dom";
import axios from "axios";
import Input from "./Input";
import Button from "./Button";
import { withAlert } from "./withProvider";
import { withUser } from "./withProvider";
function callLoginApi(values, bag) {
  axios
    .post("https://myeasykart.codeyogi.io/login", {
      email: values.email,
      password: values.password,
    })
    .then((response) => {
      const { user, token } = response.data;
      localStorage.setItem("token", token);
      bag.props.setUser(user);
    })
    .catch(() => {
      bag.props.setAlert({
        type: "error",
        message: "login is faild",
      });
    });
}

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(12).required(),
});

const initialValues = {
  email: "",
  password: "",
};

export function LoginPage({
  handleSubmit,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center bg-white rounded-lg sm:m-4 md:m-4 w-96">
        <form onSubmit={handleSubmit} className="flex flex-col m-2">
          <h1 className="self-center mb-4 text-2xl font-bold">
            Login to ShopToday
          </h1>
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
          <Button type="sumbit">Login</Button>
        </form>
        <p className="m-1">
          Create a new account{" "}
          <Link to="/SingupPage" className="text-blue-600 hover:underline ">
            {" "}
            sing up
          </Link>
        </p>
      </div>
    </div>
  );
}

const FormikLogin = withFormik({
  validationSchema: schema,
  initialValues: initialValues,
  handleSubmit: callLoginApi,
})(LoginPage);

export default withAlert(withUser(FormikLogin));
