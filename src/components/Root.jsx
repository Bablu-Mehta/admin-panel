import React from "react";
import classes from "./Root.module.css";
import { Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";
const Root = () => {
  return (
    <div className={classes.container}>
      <SideMenu />
      <div className={classes.outlet}>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
