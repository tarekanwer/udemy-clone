import React from "react";
import classes from "./CourseNav.module.css";
import Nav from "./Nav";

const CourseNav = () => {
  return (
    <div className={classes.container}>
      <h1>A broad selection of courses</h1>
      <p>
        Choose from 204,000 online video courses with new additions published
        every month
      </p>
      <Nav />
    </div>
  );
};

export default CourseNav;
