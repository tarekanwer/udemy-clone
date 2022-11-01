import React from "react";
import classes from "./Overlay.module.css";

const Overlay = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.tri}>
        <div className={classes.tri2}></div>
      </div>
      <div className={classes.content}>
        {props.children}
      </div>
    </div>
  );
};

export default Overlay;
