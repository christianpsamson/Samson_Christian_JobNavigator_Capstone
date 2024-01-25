import React from "react";
import { Link, Form, redirect, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/auth/login", data);
    toast.success("Login successful");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg);

    return redirect("/login");
  }
};

const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow type="email" name="email" defaultValue="" />
        <FormRow type="password" name="password" defaultValue="" />
        <button className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? "submitting..." : "Login"}
        </button>
        {/* <button className="btn btn-block">
          {" "}
          <Link to="/dashboard" style={{ color: "white" }}>
            Take a Tour
          </Link>
        </button> */}
        <p>
          New to Carrera?{" "}
          <Link to="/register" className="login-signup">
            Sign up
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Login;
