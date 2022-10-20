import React, { useState, Fragment } from "react";
import classes from "./Nav.module.css";
import CategoryCourses from "./CategoryCourses";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const categories = [
  "Python",
  "Excel",
  "Web Development",
  "Javascript",
  "Data Science",
  "AWS Certification",
  "Drawing",
];

const Nav = () => {
  const [isSelected, setIsSelected] = useState(0);
  const classHandler = (event) => {
    setIsSelected(+event.target.value);
    console.log(event.target);
  };
  return (
    <Fragment>
      <nav className={classes.container}>
        <ul>
          {categories.map((item, index) => {
            return (
              <li key={index}>
                <button
                  key={index}
                  className={
                    isSelected === index
                      ? `${classes.btn} ${classes.active}`
                      : `${classes.btn}`
                  }
                  onClick={classHandler}
                  value={index}
                >
                  {item}
                  <div className={classes.arrow}>
                    <ExpandMoreIcon />
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={classes.box}>
        <CategoryCourses />
      </div>
    </Fragment>
  );
};

export default Nav;
