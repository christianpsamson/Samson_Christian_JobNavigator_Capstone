import React from "react";
import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";
import Logo from "../components/logo";
import Main from "../assets/images/main.svg";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>search</span> app
          </h1>
          <p>
            Welcome to Carrera – Your Gateway to Career Awesomeness! Discover
            exciting job opportunities tailored for professionals like you.
            Swipe, match, and ignite your career race. Let's make work feel like
            play!
          </p>
          <Link to="/register" className="btn register-Link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo
          </Link>
        </div>
        <div>
          <img src={Main} alt="explore" className="img main-img" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
