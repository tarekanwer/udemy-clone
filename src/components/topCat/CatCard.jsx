import React from "react";
import classes from "./CatCard.module.css";

const CatCard = (props) => {
  return (
    <div className={classes.container}>
      <img src={props.img} alt="img " />
      <h5>{props.category}</h5>
    </div>
  );
};

export default CatCard;
