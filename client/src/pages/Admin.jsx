import React from "react";
import Wrapper from "../assets/wrappers/ErrorPage";
import ErrorImg from "../assets/images/under-construction.svg";

const Stats = () => {
  return (
    <Wrapper>
      <div>
        <h3>Oops! Admin page is currently being developed.</h3>
        <p>
          Our team is hard at work crafting something special that will make
          your time here even more enjoyable.
        </p>
        <img src={ErrorImg} alt="under-construction" />
      </div>
    </Wrapper>
  );
};

export default Stats;
