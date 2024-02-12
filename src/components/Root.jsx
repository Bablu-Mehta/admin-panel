import React from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";

const Root = () => {
  return (
    <>
      <SideMenu>
        <Outlet />
      </SideMenu>
    </>
  );
};

export default Root;
