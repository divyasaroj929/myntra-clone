import React from "react";
import { useNavigate } from "react-router-dom";

import secondimg from "../Image/secondimg.jpg";

import firstmyntra from "../Image/firstmyntra.jpg";

import thirdImg from "../Image/thirdImg.jpg";

import fourimg from "../Image/fourimg.jpg";

import six from "../Image/six.jpg";

import PropsImage from "../ShortComponent/SimpleComponent/PropsImage";

import Shopnow from "../ShortComponent/SimpleComponent/Shopnow";
import RightSideOffer from "../frontpagefile/RightSideOffer";

const MyntraFrontPage = () => {
  const navigate = useNavigate();
  const turnMen = () => {
    navigate("/Man");
  };
  const turnWomen = () => {
    navigate("/Woman");
  };
  const turnWishlist = () => {
    navigate("/Wishlist");
  };

  console.log("men");

  const shortData = [
    {
      img: secondimg,
    },
    {
      img: six,
    },
    {
      img: secondimg,
    },
    {
      img: secondimg,
    },
    {
      img: secondimg,
    },
    {
      img: secondimg,
    },
    {
      img: secondimg,
    },
    {
      img: secondimg,
    },
    {
      img: secondimg,
    },
    {
      img: secondimg,
    },
    {
      img: secondimg,
    },
    {
      img: secondimg,
    },
  ];

  return (
    <>
      <div className="Home-container-of-frontpage">
        <div className="main-img">
          <img src={firstmyntra} alt="img2" className="main-img-container" />
          <Shopnow
            name="for him"
            className="button-section1"
            onClick={turnMen}
          />
          <Shopnow
            name="for her"
            className="button-section2"
            onClick={turnWomen}
          />
          <div className="offer-section">
            <div className="offer-img">
              <img src={six} alt="img3" className="stecker" />
            </div>
            <p>Jaw-Droping Prices This Way</p>
            <Shopnow
              name="shop now"
              className="button-section"
              onClick={turnWishlist}
            />
          </div>
        </div>
        <div className="row-column-multi-img">
          <div
            className="multi-img"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {shortData.map((value) => {
              return <img src={value.img} alt="done" className="summer" />;
            })}
          </div>
        </div>

        <RightSideOffer />
        <PropsImage imgname={firstmyntra} />
        <PropsImage imgname={secondimg} />
        <PropsImage imgname={thirdImg} />
        <PropsImage imgname={fourimg} />
      </div>
    </>
  );
};

export default MyntraFrontPage;
