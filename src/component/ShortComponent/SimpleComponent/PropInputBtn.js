import React from "react";

const PropInputBtn = (props) => {
  return (
    <input
      type={props.type}
      className={props.className}
      value={props.value}
      onClick={props.onClick}
    />
  );
};

export default PropInputBtn;
