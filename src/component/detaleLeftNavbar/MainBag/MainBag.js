import React, { useState } from "react";
import emptybag from "../../Image/emptybag.png";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import ContainerOfDiv from "../../ShortComponent/SimpleComponent/ContainerOfDiv";
import PropinputBtn from "../../ShortComponent/SimpleComponent/PropInputBtn";

import "./index.css";
const Mainbag = () => {
  const [changenav, setChangenav] = useState(false);

  const navigate = useNavigate();

  const turnWishlist = () => {
    navigate("/Wishlist");
  };
  return (
    <>
      <div className="first-container-bag">
        {/* <div className=" bag-top-head">
          <Logo />
          <PropDiv
            className="three-stage-of-buy"
            value={[
              <span>BAG</span>,
              <span>.......ADDRESS</span>,
              <span>........PAYMENT</span>,
            ]}
          />
          <PropDiv
            className="SECURE"
            value={[
              <BsFillPatchCheckFill className="right-tick" />,
              <span>100% secure</span>,
            ]}
          />
        </div> */}
        <div className="second-container-bag">
          <ContainerOfDiv
            className="empty-bag"
            value={[<img src={emptybag} className="img-bag" />]}
          />
          <ContainerOfDiv
            className="bag-header"
            value="Hey ,it feels so light!"
          />
          <ContainerOfDiv
            className="bag-para"
            value="There is nothing in your bag. Let's add some items."
          />
          <PropinputBtn
            type="button"
            className="login-bag"
            value={"ADD ITEMS FROM WISHLIST"}
            onClick={turnWishlist}
          />
        </div>
      </div>
    </>
  );
};
export default Mainbag;
