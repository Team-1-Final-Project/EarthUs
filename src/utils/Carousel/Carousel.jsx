import Slider from 'react-slick';
import 'utils/Carousel/slick.css';
import 'utils/Carousel/slick-theme.css';

const Carousel = ({ children }) => {
  // 옵션
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
  };

  return (
    <div className="carousel">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default Carousel;
