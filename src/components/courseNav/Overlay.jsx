import React, { useMemo } from "react";
import ReactDom from "react-dom";
import { useSelector } from "react-redux";
import classes from "./Overlay.module.css";
import { useDispatch } from "react-redux";

let styles;

const Overlay = (props) => {
  const dispatch = useDispatch();
  let x = useSelector((state) => state.x);
  let y = useSelector((state) => state.y);
  useMemo(() => {
    styles = {
      position: "absolute",
      top: `${y}px`,
      left: `${x}px`,
    };
  }, [x, y]);
  const hoverHandler = () => {
    dispatch({ type: "show" , hoverOverlay : true });
  };

  const leaveHandler = () => {
    dispatch({type: "hide" , hoverOverlay : false});
  };

  return ReactDom.createPortal(
    <div
      className={classes.container}
      style={styles}
      onMouseMove={hoverHandler}
      onMouseLeave = {leaveHandler}
    >
      <div className={classes.content}>{props.children}</div>
    </div>,
    document.getElementById("overlays")
  );
};

export default Overlay;
