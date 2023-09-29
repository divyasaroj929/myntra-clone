import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";

import { useLocation } from "react-router-dom";

import Navbar from "../navbar/Navbar";
import Logo from "../navbar/component/Logo/Logo";

import Search from "../navbar/component/Search/Search";

import NavII from "../navbar/LeftSideNavbar";

import ContainerOfDiv from "../SimpleComponent/ContainerOfDiv";

import "./index.css";

const NavRouterPage = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      {path == "/Bag" ? (
        <div className=" bag-top-head">
          <Logo />
          <ContainerOfDiv
            className="three-stage-of-buy"
            value={[
              <span>BAG</span>,
              <span>.......ADDRESS</span>,
              <span>........PAYMENT</span>,
            ]}
          />
          <ContainerOfDiv
            className="SECURE"
            value={[
              <BsFillPatchCheckFill className="right-tick" />,
              <span>100% secure</span>,
            ]}
          />
        </div>
      ) : (
        <div className="top-header">
          <Logo />
          <Navbar />
          <Search />
          <NavII />
        </div>
      )}
    </>
  );
};

export default NavRouterPage;
