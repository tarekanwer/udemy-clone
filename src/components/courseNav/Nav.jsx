import React, { useState, Fragment } from "react";
import classes from "./Nav.module.css";
import CategoryCourses from "./CategoryCourses";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import arrow from "../../images/arrow.png";

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
    console.log(event.target.value);
    setIsSelected(+event.target.value);
  };
  return (
    <Fragment>
      <nav className={classes.container}>
        <ul>
          {categories.map((item, index) => {
            return (
              <li
                key={index}
                onClick={classHandler}
                className={
                  isSelected === index
                    ? `${classes.item} ${classes.active}`
                    : `${classes.item}`
                }
                value={index}
              >
                {item}
                <button
                  key={item}
                  className={classes.arrow}
                  value={index}
                ></button>
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
