import React from "react";
import Carousel from "react-material-ui-carousel";
import g1 from "../../images/g1.jpg";
import g2 from "../../images/g2.jpg";
import classes from "./Gallery.module.css";

const items = [
  {
    src: g1,
  },
  {
    src: g2,
  },
];

const slideHandler = ( src, index) => {
  if (index === 0) {
    return (
      <div key={index} className={classes.container}>
        <img src={src} alt="gallery-img" />
        <div className={classes.modal}>
          <h5>Unlock the power of your people</h5>
          <p>
            Udemy Business is trusted by 12.5K+ companies around the world.{" "}
            <u>Find out what we can do for yours.</u>
          </p>
        </div>
      </div>
    );
  }
  if (index === 1) {
    return (
      <div key={index} className={classes.container}>
        <img src={src} alt="gallery-img" />
        <div className={classes.modal__2}>
          <h5>Learning that gets you</h5>
          <p>Skills for your present (and your future). Get started with us.</p>
        </div>
      </div>
    );
  }
};

const Gallery = () => {
  return (
    <Carousel
      indicators={false}
      navButtonsAlwaysVisible={true}
      animation="slide"
      interval={10000}
    >
      {items.map((item, index) => {
        return slideHandler(item.src, index);
      })}
    </Carousel>
  );
};

export default Gallery;
