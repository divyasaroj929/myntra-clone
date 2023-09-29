import React from "react";
import { NavLink } from "react-router-dom";

const PropNavII = (props) => {
  return (
    <>
      <ul>
        <li>
          <NavLink to={props.path} className={props.className}>
            {props.icon}
            <span className="span">{props.name}</span>
          </NavLink>
          {props.component}
        </li>
      </ul>
    </>
  );
};
export default PropNavII;
