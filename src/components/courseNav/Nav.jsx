import React, { useState } from "react";
import classes from "./Nav.module.css";
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
  };
  console.log(isSelected);
  return (
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
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
