import React from "react";
import Carousel from "react-material-ui-carousel";
import g1 from "../../images/g1.jpg";
import g2 from "../../images/g2.jpg";

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

const Gallery = () => {
  return (
    <Carousel indicators={false} navButtonsAlwaysVisible={true} animation = 'slide' interval={10000}>
      {items.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.src} alt="gallery-img" />
          </div>
        );
      })}
    </Carousel>
  );
};

export default Gallery;
