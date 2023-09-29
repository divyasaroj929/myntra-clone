import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContainerOfDiv from "../../ShortComponent/SimpleComponent/ContainerOfDiv";
import PropinputBtn from "../../ShortComponent/SimpleComponent/PropInputBtn";
import Closet from "../../Image/Closet.svg";
import "./index.css";

const MainWishlist = () => {
  const navigate = useNavigate();

  const turnProfile = () => {
    navigate("/profile");
  };

  const a = "";

  console.log("kguibl");
  return (
    <>
      <div className="Wishlist">
        <div className="top-head"></div>
        <div className="center-div-wishlist">
          <ContainerOfDiv
            className="h1-header"
            value={[<h1 key={a}>please log in</h1>]}
          />
          <ContainerOfDiv
            className="p1-para"
            value="Login to view items in your wishlist"
          />
          <div className="svg-img">
            <img src={Closet} className="img" />
          </div>
          <PropinputBtn
            type="button"
            className="login-wishlist"
            value={"login"}
            onClick={turnProfile}
          />
        </div>
      </div>
    </>
  );
};

export default MainWishlist;
