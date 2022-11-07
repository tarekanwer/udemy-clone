import React, { useEffect } from "react";
import ReactDom from "react-dom";
import { useSelector } from "react-redux";
import classes from "./Overlay.module.css";

let styles;

const Overlay = (props) => {
  let x = useSelector((state) => state.x);
  let y = useSelector((state) => state.y);
  useEffect(() => {
    styles = {
      position: "absolute",
      top: `${y}px`,
      left: `${x}px`,
    };
  }, [x, y]);

  return ReactDom.createPortal(
    <div className={classes.container} style={styles}>
      <div className={classes.content}>{props.children}</div>
    </div>,
    document.getElementById("overlays")
  );
};

export default Overlay;
