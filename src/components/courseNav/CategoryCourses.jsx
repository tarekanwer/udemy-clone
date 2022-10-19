import React from "react";
import classes from "./CategoryCourses.module.css";
import CourseCard from "./CourseCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  b6: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1200 },
    items: 5,
    partialVisibilityGutter: 40,
  },
  b5: {
    breakpoint: { max: 1200, min: 1000 },
    items: 4,
    partialVisibilityGutter: 30,
  },
  b4: {
    breakpoint: { max: 1000, min: 900 },
    items: 3.5,
    partialVisibilityGutter: 30,
  },
  b3: {
    breakpoint: { max: 900, min: 750 },
    items: 3,
    partialVisibilityGutter: 30,
  },
  b2: {
    breakpoint: { max: 750, min: 650 },
    items: 2.7,
    partialVisibilityGutter: 30,
  },
  b1: {
    breakpoint: { max: 650, min: 0 },
    items: 2,
    partialVisibilityGutter: 30,
  },
};

const CategoryCourses = () => {
  return (
    <div className={classes.container}>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
      >
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </Carousel>
    </div>
  );
};

export default CategoryCourses;