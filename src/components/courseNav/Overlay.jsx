import React, { useMemo } from "react";
import ReactDom from "react-dom";
import { useSelector } from "react-redux";
import classes from "./Overlay.module.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DoneIcon from '@mui/icons-material/Done';


let styles;

const Overlay = (props) => {
  let x = useSelector((state) => state.x);
  let y = useSelector((state) => state.y);
  useMemo(() => {
    styles = {
      position: "absolute",
      top: `${y}px`,
      left: `${x}px`,
    };
  }, [x, y]);

  return ReactDom.createPortal(
    <div className={classes.container} style={styles}>
      <div className={classes.content}>
        <h1>Learn Python: The Complete Python Programming Course</h1>
        <h5>
          Updated <b>September 2022</b>
        </h5>
        <h6>14.5 . total hoursAll . LevelsSubtitles</h6>
        <h4>
          Learn A-Z everything about Python, from the basics, to advanced topics
          like Python GUI, Python Data Analysis, and more!{" "}
        </h4>
        <ul>
          <li><DoneIcon /> <h6>Create their own Python Programs</h6></li>
          <li><DoneIcon/> <h6>Become an experienced Python Programmer</h6></li>
          <li><DoneIcon/> <h6>Parse the Web and create their own Games</h6></li>
        </ul>
        <span>
          <button className={classes.cart}>Add to the Cart</button>
          <button className={classes.fav}><FavoriteBorderIcon sx = {{
          width : "1.8rem",
          height : "1.8rem",
          }}/></button>
        </span>
      </div>
    </div>,
    document.getElementById("overlays")
  );
};

export default Overlay;
