import React, { useEffect, useState } from "react";

import "../styles/carouselmobile.css";

export const CarouselItemMobile = ({ children, width }) => {
  return (
    <div className="carousel-item-mobile" style={{ width: width }}>
      {children}
    </div>
  );
};

const CarouselMobile = ({ children }) => {
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
    }, 6000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });


  return (
    <div
      className="carouselmobile"
    >
      <div
        className="innermobile"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
    </div>
  );
};

export default CarouselMobile;