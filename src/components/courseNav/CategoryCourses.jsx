import React from "react";
import classes from "./CategoryCourses.module.css";
import CourseCard from "./CourseCard";

const CategoryCourses = () => {
  return (
    <div className={classes.container}>
      <CourseCard />
    </div>
  );
};

export default CategoryCourses;
