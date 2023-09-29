import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavProfile from "../profilenavbarDropdown/NavProfile";
import FilterParaProps from "../../mensection/filter/FilterParaProps";
import "./index.css";

const ProflieDropdown = () => {
  const navigate = useNavigate();
  const Profilepage = () => {
    navigate("/profile");
  };

  console.log("jhikbjk");
  return (
    <>
      <div className="user-profile-navbarII">
        <FilterParaProps className="proflie-heading" heading="welcome" />
        <FilterParaProps
          className="proflie-para"
          heading="To access account and manage orders"
        />
        <div className="inner-div-proflie">
          <input
            type="button"
            className="btn-sign-up"
            value={"signup/login"}
            onClick={Profilepage}
          />
        </div>
        <div className=" box1">
          <div className=" div1">
            <NavProfile name="order" path="/order" />
            <NavProfile name="wishlist" path="woman" />
            <NavProfile name="gift card" path="wishlist" />
            <NavProfile name="Orders" path="woman" />
            <NavProfile name="Contact Us" path="wishlist" />
          </div>
          <div className=" div2">
            <NavProfile name="Myntra Insider" path="/" />
            <NavProfile name="Myntra Credit" path="woman" />
            <NavProfile name="Coupons" path="woman" />
            <NavProfile name="Saved Cards" path="woman" />
            <NavProfile name=" Saved VPA" path="wishlist" />
          </div>
        </div>
      </div>
    </>
  );
};
export default ProflieDropdown;
