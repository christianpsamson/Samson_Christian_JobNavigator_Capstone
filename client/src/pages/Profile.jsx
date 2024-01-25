import React from "react";
import Wrapper from "../assets/wrappers/ErrorPage";
import ErrorImg from "../assets/images/profile.svg";

const Stats = () => {
  return (
    <Wrapper>
      <div>
        <h3>Oops! Profile page is currently being developed.</h3>
        <p>
          Our team is hard at work crafting something special that will make
          your time here even more enjoyable.
        </p>

        <img
          src={ErrorImg}
          alt="under-construction"
          style={{ margin: "1.25rem" }}
        />
      </div>
    </Wrapper>
  );
};

export default Stats;
