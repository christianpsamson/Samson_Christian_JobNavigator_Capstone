import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import ErrorImg from "../assets/images/not-found-error.svg";

const Error = () => {
  const error = useRouteError();
  if (error && error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={ErrorImg} alt="404 not found" />
          <h3>Oops! It seems we took a detour into the unknown.</h3>
          <p>
            This page is like a treasure map without an 'X.' Fear not, we're
            navigating back to base camp!
          </p>
          <Link to="/dashboard" className="btn">
            back to home
          </Link>
        </div>
      </Wrapper>
    );
  }
};
export default Error;
