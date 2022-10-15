import React from "react";
import Carousel from "react-material-ui-carousel";
import g1 from "../../images/g1.jpg";
import g2 from "../../images/g2.jpg";
import classes from "./Gallery.module.css";

const items = [
  {
    description: "A PDF Reader specially designed for musicians.",
    src: g1,
  },
  {
    description:
      "My Solution on the 2019 Hash Code by Google Slideshow problem.",
    src: g2,
  },
];

const slideHandler = (text, src, index) => {
  if (index === 0) {
    return (
      <div key={index} className={classes.container}>
        <div className={classes.modal}></div>
        <img src={src} alt="gallery-img" />
      </div>
    );
  }
  if (index === 1) {
    return (
      <div key={index} className={classes.container}>
        <div></div>
        <img src={src} alt="gallery-img" />
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
        return slideHandler(item.description, item.src, index);
      })}
    </Carousel>
  );
};

export default Gallery;
