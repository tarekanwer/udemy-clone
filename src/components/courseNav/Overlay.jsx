import React from "react";
import ReactDom from "react-dom";
import classes from "./Overlay.module.css";

const styles = {
  position : "absolute",
  top : "80%",
  left : "60%"
}

const Overlay = (props) => {
  return ReactDom.createPortal(
    <div className={classes.container} style = {styles}>
      <div className={classes.content}>{props.children}</div>
    </div>,
    document.getElementById("overlays")
  );
};

export default Overlay;
