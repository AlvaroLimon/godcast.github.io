import React, { useEffect, useState } from "react";

import "../styles/carousel.css";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carouselitem" style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
        updateIndex(activeIndex + 1);
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });


  return (
    <div
      className="carousel"
    >
      <div
        className="inner"
        style={{ transform: `translateY(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "auto" });
        })}
      </div>
    </div>
  );
};

export default Carousel;