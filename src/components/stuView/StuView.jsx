import React from "react";
import classes from "./StuView.module.css";
import CategoryCourses from "../courseNav/CategoryCourses";
const y = 1080;
const StuView = () => {
  return <div className={classes.container}>
    <h1>Students are viewing</h1>
    <CategoryCourses y = {y}/>
  </div>;
};

export default StuView;
