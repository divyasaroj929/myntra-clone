import React from "react";

const FilterParaProps = (props) => {
  return (
    <>
      <p style={props.style} className={props.className}>
        {props.heading}
      </p>
    </>
  );
};
export default FilterParaProps;
