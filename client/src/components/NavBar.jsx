import React from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { HiMenuAlt1 } from "react-icons/hi";
import Logo from "./Logo";
import { useDashboardContext } from "../pages/Dashboard";
import LogoutContainer from "./LogoutContainer";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  const { toggleSideBar } = useDashboardContext();

  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSideBar}>
          <HiMenuAlt1 />
        </button>
        <div>
          <Logo />
          <h4 className="logo-text">dashboard</h4>
        </div>
        <div className="btn-container">
          <ThemeToggle />
          <LogoutContainer />
        </div>
      </div>
    </Wrapper>
  );
};

export default NavBar;
