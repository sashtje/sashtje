import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./../Sidebar";

import "./styles.scss";

const Layout = () => {
  return (
    <div className="page">
      <Sidebar />

      <Outlet />
    </div>
  );
};

export default Layout;
