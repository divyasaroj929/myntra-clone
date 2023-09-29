import React from "react";

const SearchFilter = (props) => {
  return (
    <>
      <div className="searchFilter-input">
        <input
          type="text"
          className="inputfilter"
          placeholder="search for categroy"
        />

        <div
          className="close"
          onClick={() => {
            props.closemodel(false);
          }}
        >
          x
        </div>
      </div>
    </>
  );
};
export default SearchFilter;
