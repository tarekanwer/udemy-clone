import React from "react";
import classes from "./CourseCard.module.css";
import course from "../../images/course.jpg";
import Rating from "@mui/material/Rating";
import { useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Overlay from "./Overlay";

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[0],
    fontSize: 11,
  },
}));

const rating = 4.6;
const reviews = 2732;
const price = 269.99;
const CourseCard = (props) => {
  const dispatch = useDispatch();
  const hoverHandler = (event) => {
    const item = event.currentTarget.getBoundingClientRect();
    console.log(item);
    dispatch({ type: "show", position: item });
  };
  return (
    <CustomTooltip title={<Overlay />}>
      <div className={classes.container} onMouseOver={hoverHandler}>
        <div className={classes.overlay}></div>
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
    </CustomTooltip>
  );
};

export default CourseCard;
