import React, { useState, Fragment } from "react";
import classes from "./Nav.module.css";
import CategoryCourses from "./CategoryCourses";

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
  const [open, setIsOpen] = useState(true);
  const classHandler = (event) => {
    setIsOpen(!open);
    setIsSelected(+event.target.value);
    const item = categories.filter(
      (cat, index) => index === +event.target.value
    )[0];
    console.log(item);
  };
  return (
    <Fragment>
      <nav className={classes.container}>
        <ul className={classes.list}>
          {categories.map((item, index) => {
            return (
              <li key={index}>
                <ul className={classes.item__list}>
                  <li
                    key={index}
                    onClick={classHandler}
                    className={
                      isSelected === index && open
                        ? `${classes.item} ${classes.active}`
                        : `${classes.item}`
                    }
                    value={index}
                  >
                    {item}
                    <button
                      key={item}
                      className={
                        isSelected === index && open
                          ? `${classes.arrow} ${classes.act}`
                          : `${classes.arrow}`
                      }
                      value={index}
                    ></button>
                  </li>
                  <li
                    className={
                      isSelected === index && open
                        ? `${classes.show}`
                        : `${classes.hide}`
                    }
                  >
                    <CategoryCourses />
                  </li>
                </ul>
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
