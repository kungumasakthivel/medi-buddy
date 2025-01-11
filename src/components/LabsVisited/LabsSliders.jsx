import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards/Cards";

function LabsSliders() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,        
    autoplaySpeed: 3000,      
    pauseOnHover: true,       
    pauseOnDotsHover: true
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

export default LabsSliders;
