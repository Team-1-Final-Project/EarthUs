import Slider from 'react-slick';
import { useState, useCallback } from 'react';
import 'utils/Carousel/slick.css';
import 'utils/Carousel/slick-theme.css';

const Carousel = ({ children }) => {
  const [dragging, setDragging] = useState(false);
  const handleBeforeChange = useCallback(() => {
    setDragging(true);
  }, [setDragging]);
  const handleAfterChange = useCallback(() => {
    setDragging(false);
  }, [setDragging]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    draggable: true,
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
    touchThreshold: 200000,
    arrows: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default Carousel;
