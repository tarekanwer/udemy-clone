import React, { useState, Fragment } from "react";
import classes from "./Nav.module.css";
import Category from "./Category";

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
                  </button>
                </li>
              );
            })}
          </ul>
      </nav>
      <Category />
    </Fragment>
  );
};

export default Nav;
