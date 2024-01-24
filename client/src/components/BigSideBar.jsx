import React from "react";
import Wrapper from "../assets/wrappers/BigSidebar";
import { useDashboardContext } from "../pages/Dashboard";
import Logo from "./Logo";
import NavBarLinks from "./NavBarLinks";

const BigSideBar = () => {
  const { showSideBar } = useDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          showSideBar ? "sidebar-container" : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavBarLinks isBigSideBar={true} />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSideBar;
