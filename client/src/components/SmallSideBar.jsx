import React from "react";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { useDashboardContext } from "../pages/Dashboard";
import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import NavBarLinks from "./NavBarLinks";

const SmallSideBar = () => {
  const { showSideBar } = useDashboardContext();
  // Ternary Operator controls the sidebar by setting className for CSS
  return (
    <Wrapper>
      <div
        className={
          showSideBar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button type="button" className="close-btn">
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavBarLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSideBar;
