import React from "react";
import { BiChevronDown } from "react-icons/bi";
import FilterParaProps from "../filter/FilterParaProps";
import ContainerOfDiv from "../../ShortComponent/SimpleComponent/ContainerOfDiv";
import ShortBy from "../shortby/ShortBy";
import "../Shop/index.css";

const MenNavbarShop = (props) => {
  console.log("hjuuhi");
  console.log(props);

  return (
    <>
      <div className="main-container-middle-section ">
        <div className="second-head">
          <div className="head-section">
            <ul>
              <li>
                <a href="/">home</a>
              </li>
              <li>
                <a href="/Woman">Clothing</a>
              </li>
              <li>
                <a href="/Man">Men Casual Wear </a>
              </li>
            </ul>
          </div>

          <div className="p4">
            {props.gendername} - <div className="p5">{props.count}</div>
          </div>
          <div className="filter-first-component">
            <div className="filter-clear-all">
              <FilterParaProps
                heading={props.heading}
                style={{
                  color: "black",
                  fontWeight: "500",
                  fontSize: "15px",
                }}
              />
              <FilterParaProps
                heading={props.clearall}
                style={{
                  fontWeight: "600",
                  color: "#ff3f6c",
                  fontSize: "15px",
                  cursor: "pointer",
                }}
              />
            </div>
            <ContainerOfDiv
              className="short-by"
              value={[
                <span>{props.shortby} :</span>,
                <h1>{props.recommended}</h1>,
                <BiChevronDown className="bottom-arrow" />,
                <ShortBy />,
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default MenNavbarShop;
