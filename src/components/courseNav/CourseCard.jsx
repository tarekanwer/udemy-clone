import React from "react";
import classes from "./CourseCard.module.css";
import course from "../../images/course.jpg";
import Rating from "@mui/material/Rating";
const rating = 4.6;
const reviews = 2732;
const CourseCard = () => {
  return (
    <div className={classes.container}>
      <img src={course} alt="course" />
      <h3>Learn Python</h3>
      <p>Avinash Jain, The Codex</p>
      <span className={classes.rating}>
        <h6>{rating}</h6>
        <Rating
          name="half-rating-read"
          defaultValue={rating}
          precision={0.1}
          readOnly
          size="small"
        />
        <p>{`(${reviews})`}</p>
      </span>
    </div>
  );
};

export default CourseCard;
