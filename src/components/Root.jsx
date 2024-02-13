import React from "react";
import classes from "./Root.module.css";
import { Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";
import { useSelector } from "react-redux";
import Auth from "./Auth";
const Root = () => {
  // const auth = useSelector((state) => state.isAuth);
  return (
    <>
      {/* {!auth && <Auth />}
      {auth && (
        <div className={classes.container}>
          <SideMenu />
          <div className={classes.outlet}>
            <Outlet />
          </div>
        </div>
      )} */}

      <div className={classes.container}>
        <div className={classes.left}>
          <SideMenu />
        </div>

        <div className={classes.right}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Root;
