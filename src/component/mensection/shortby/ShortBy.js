import React from "react";
import "./shortByDropdown.css";
const shortbyData = [
  {
    title: [
      "recommended",
      "What's new",
      "Popularity",
      "Better discount",
      "Price : high to low",
      "Price: low to high",
      "Customer Rating",
    ],
  },
];

const ShortBy = () => {
  // console.log("shortbyData");
  return (
    <>
      <div className="Short-by-first-container">
        <div className="Short-by-second">
          <ul>
            <div className="short-by-list">
              {shortbyData.map((item, index) => {
                <li key={index}>{item}</li>;
                // console.log(shortbyData);
                return (
                  <ul>
                    {item.title.map((value, index) => {
                      // console.log(value);
                      return <li key={index}>{value}</li>;
                    })}
                  </ul>
                );
              })}
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ShortBy;
