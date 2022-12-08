import React, { Fragment } from "react";
import classes from "./CourseCard.module.css";
import course from "../../images/course.jpg";
import Rating from "@mui/material/Rating";
import { useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { useSelector } from "react-redux";
import ROverlay from "./ROverlay";
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
  const y = props.y;
  const hoverHandler = (event) => {
    const item = event.currentTarget.getBoundingClientRect();
    const width = window.innerWidth;
    const x = event.clientX;
    const overlay = x > 0.6 * width ? "R" : "L";
    dispatch({
      type: "show",
      position: item,
      overlay: overlay,
    });
  };
  let R = useSelector((state) => state.R);
  let L = useSelector((state) => state.L);

  const overlaySelector = (R, L) => {
    return (
      <Fragment>
        {R && <ROverlay y = {y} />}
        {L && <Overlay y  = {y} />}
      </Fragment>
    );
  };

  return (
    <CustomTooltip title={overlaySelector(R, L)}>
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
            sx={{
              marginTop: ".1rem",
            }}
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
