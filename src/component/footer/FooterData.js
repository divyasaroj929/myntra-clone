import React from "react";
import "./footer.css";

const FooterData = ({ footdata, data }) => {
  // console.log(footdata);
  // console.log(data);
  return (
    <>
      <div className=" ul-container">
        <ul className="first-ul">
          {footdata.map((value, index) => {
            return (
              <div className="first-contair" key={index}>
                {value.map((item, index) => {
                  return (
                    <li key={index}>
                      <h1 className="heading">{item.heading}</h1>
                      <div className="second-list">
                        <ul>
                          {item.list.map((value, index) => {
                            return (
                              <li>
                                <a href="#">{value}</a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </li>
                  );
                })}
              </div>
            );
          })}
        </ul>
      </div>

      <div className="link-container">
        <div className=" poular">poular search</div>
        <div className="popular-search">
          {" "}
          {/* <div className="link"> */}
          {data.map((item) => {
            // console.log(item);
            return (
              <a href="#" className=" link">
                {item}
                <span className="line">|</span>
              </a>
            );
          })}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default FooterData;
