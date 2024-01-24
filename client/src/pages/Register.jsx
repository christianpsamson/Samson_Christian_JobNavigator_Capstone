import React from "react";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="" />
        {/* prettier-ignore */}
        <FormRow type="text" name="lastname" labelText="Last Name" defaultValue=""/>
        <FormRow type="email" name="email" defaultValue="" />
        <FormRow type="password" name="password" defaultValue="" />
        <button className="btn btn-block">submit</button>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="login-signup">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
