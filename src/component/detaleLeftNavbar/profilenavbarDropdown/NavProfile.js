import React from "react";
import { NavLink } from "react-router-dom";

const NavProfile = (props) => {
  return (
    <>
      <ul>
        <li>
          <NavLink to={props.path}>{props.name}</NavLink>
        </li>
      </ul>
    </>
  );
};
export default NavProfile;
