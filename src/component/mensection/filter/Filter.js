import React, { useState } from "react";

import SearchFilter from "../filter/SearchFilter";
import { HiOutlineSearch } from "react-icons/hi";

const Filter = ({ FilterList, categroy }) => {
  const [input, setInput] = useState(false);
  // console.log(props);

  // const alpha = {
  //   a: " a",
  //   b: "b",
  //   c: "c",
  //   d: "d",
  // };
  // const { a } = alpha;
  // const {FilterList,categroy} = props;

  return (
    <>
      <div className="filter-header">
        <div className="repeat-use-filter-border">
          <div className="filter-category">
            <div className="filter-category-heading">{categroy} </div>
            <div className="search-icon-filter">
              <HiOutlineSearch
                className="b"
                onClick={() => {
                  setInput(true);
                }}
              />
              {input && <SearchFilter closemodel={setInput} />}
            </div>
          </div>
          <div className="filter-border">
            <div className="Fliter-list">
              <ul>
                {FilterList.map((item, index) => {
                  return (
                    <li key={index}>
                      <input type="checkbox" /> {item.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Filter;
