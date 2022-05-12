import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaUser, FaEnvelope } from "react-icons/fa";

import "./styles.scss";

const Sidebar = () => {
  const setActive = ({ isActive }) => {
    return isActive
      ? "sidebar-nav__link sidebar-nav__link_is_active"
      : "sidebar-nav__link";
  };

  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <NavLink className={setActive} to="/">
          <AiFillHome />
        </NavLink>

        <NavLink className={setActive} to="/about">
          <FaUser />
        </NavLink>

        <NavLink className={setActive} to="/contacts">
          <FaEnvelope />
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
