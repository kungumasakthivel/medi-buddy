import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards/Cards";

function UserSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 950,
    slidesToShow: 1.01,
    slidesToScroll: 1,
    autoplay: true,        
    autoplaySpeed: 4000,      
    pauseOnHover: true,       
    pauseOnDotsHover: true,
    centerMode: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <Cards />
        </div>
        <div>
          <Cards />
        </div>
        <div>
          <Cards />
        </div>
      </Slider>
    </div>
  );
}

export default UserSlider;
