import React from "react";
import { useNavigate } from "react-router-dom";

import Picture from "../../../../Image/Picture.jpg";
import "./index.css";

const Logo = () => {
  const navigate = useNavigate();

  const turnHomepage = () => {
    navigate("/");
  };

  return (
    <>
      <div className="app-logo">
        <img src={Picture} alt="" className="img1" onClick={turnHomepage} />
      </div>
    </>
  );
};

export default Logo;
