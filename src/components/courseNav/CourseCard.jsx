import React from "react";
import classes from "./CourseCard.module.css";
import course from "../../images/course.jpg";
import Rating from "@mui/material/Rating";
import { useDispatch } from "react-redux";

const rating = 4.6;
const reviews = 2732;
const price = 269.99;
const CourseCard = (props) => {
  const dispatch = useDispatch();
  const hoverHandler = (event) => {
    const item = event.currentTarget.getBoundingClientRect();
    dispatch({ type: "show", position: item });
  };
  const closeHandler = () => {
    dispatch({ type: "hide" });
  };
  return (
    <div
      className={classes.container}
      onMouseOver={hoverHandler}
      onMouseLeave={closeHandler}
    >
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
      <span className={classes.prices}>
        <h5 className={classes.price}>{`E£${price}`}</h5>
        <s>{`E£${price}`}</s>
      </span>
    </div>
  );
};

export default CourseCard;
