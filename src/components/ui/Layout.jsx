import React, { Fragment } from "react";
import classes from "./Layout.module.css";
import Header from "../header/Header";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <div className={classes.container}>{props.children}</div>
    </Fragment>
  );
};

export default Layout;
