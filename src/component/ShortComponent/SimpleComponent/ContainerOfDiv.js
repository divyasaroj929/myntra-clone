import React from "react";

const ContainerOfDiv = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={props.style}
        onClick={props.onClick}
        typeof={props.typeof}
      >
        {props.value}
      </div>
    </>
  );
};

export default ContainerOfDiv;
