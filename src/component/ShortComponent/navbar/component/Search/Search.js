import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import "./index.css";

const search = () => {
  return (
    <>
      <div className="search-container">
        <div className="search-logo">
          <HiOutlineSearch className="b" />
          <input
            type="text"
            placeholder="Search for product,brand and more"
            className="input"
          ></input>
        </div>
      </div>
    </>
  );
};
export default search;
