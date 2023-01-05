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
  {
    category: "Marketing",
    img: "https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg",
  },
  {
    category: "IT and Software",
    img: "https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg",
  },
  {
    category: "Personal Development",
    img: "https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg",
  },
  {
    category: "Business",
    img: "https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg",
  },
  {
    category: "Photography",
    img: "https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg",
  },
  {
    category: "Music",
    img: "https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg",
  },
];

const TopCat = () => {
  return (
    <div className={classes.container}>
      <h1>Top categories</h1>
      <div>
        {cards.map((card) => {
          return <CatCard img={card.img} category={card.category} />;
        })}
      </div>
    </div>
  );
};

export default TopCat;
