import React from "react";
import CatCard from "./CatCard";
import classes from "./TopCat.module.css";

const cards = [
  {
    category: "Design",
    img: "https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg",
  },
  {
    category: "Development",
    img: "https://s.udemycdn.com/home/top-categories/lohp-category-development-2x-v2.jpg",
  },
];

const TopCat = () => {
  return (
    <div className={classes.container}>
      <h1>Top categories</h1>
      <CatCard img={cards[0].img} category={cards[0].category} />
    </div>
  );
};

export default TopCat;
