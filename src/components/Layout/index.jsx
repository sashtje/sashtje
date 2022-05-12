import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./../Sidebar";
import ThemeSwitcher from "../ThemeSwitcher";
import LanguageSwitcher from "./../LanguageSwitcher/index";

import "./styles.scss";

const Layout = () => {
  return (
    <div className="page">
      <Outlet />

      <Sidebar />
      <ThemeSwitcher />
      <LanguageSwitcher />
    </div>
  );
};

export default Layout;
