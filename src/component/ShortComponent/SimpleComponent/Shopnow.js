import React from "react";

import { FaChevronCircleRight } from "react-icons/fa";
const Shopnow = (props) => {
  return (
    <>
      <button className={props.className} onClick={props.onClick}>
        {props.name}
        <FaChevronCircleRight />
      </button>
    </>
  );
};
export default Shopnow;
