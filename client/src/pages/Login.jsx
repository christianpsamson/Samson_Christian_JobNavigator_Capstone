import React from "react";
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Link, NavLink } from "react-router-dom";

const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow type="email" name="email" defaultValue="" />
        <FormRow type="password" name="password" defaultValue="" />
        <button className="btn btn-block">Login</button>
        <button className="btn btn-block">Take a Tour</button>
        <p>
          New to Carrera?{" "}
          <Link to="/register" className="login-signup">
            Sign up
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Login;
