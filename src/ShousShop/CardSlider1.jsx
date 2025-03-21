import React from "react";
import Slider from "react-slick";


function CardSlider1() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
   <div className="card-slider-smg-smg">
     <div className="container">
    <div className="row">
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className="co-md-3">
            <img src="./media/Shous/shousmen-image1.jpg" alt="" className="card-slider-image"/>
          </div>
        </div>
        <div className="co-md-3">
            <img src="./media/Shous/shousmen-image2.webp" alt="" className="card-slider-image"/>
          </div>

         <div className="co-md-3">
            <img src="./media/Shous/shousmen-image3.webp" alt="" className="card-slider-image"/>
          </div>

         <div className="co-md-3">
            <img src="./media/Shous/shousmen-image4.jpg" alt="" className="card-slider-image"/>
          </div>

         <div className="co-md-3">
            <img src="./media/Shous/shousmen-image5.jpg" alt="" className="card-slider-image"/>
          </div>

         <div className="co-md-3">
            <img src="./media/Shous/shousmen-image6.jpg" alt="" className="card-slider-image"/>
          </div>

         <div className="co-md-3">
            <img src="./media/Shous/shousmen-image7.webp" alt="" className="card-slider-image"/>
          </div>

         <div className="co-md-3">
            <img src="./media/Shous/shousmen-image1.jpg" alt="" className="card-slider-image"/>
          </div>

          <div>
          <div className="co-md-3">
            <img src="./media/Shous/shousmen-image1.jpg" alt="" className="card-slider-image"/>
          </div>
        </div>
        <div className="co-md-3">
            <img src="./media/Shous/shousmen-image2.webp" alt="" className="card-slider-image"/>
          </div>

         <div className="co-md-3">
            <img src="./media/Shous/shousmen-image3.webp" alt="" className="card-slider-image"/>
          </div>

         <div className="co-md-3">
            <img src="./media/Shous/shousmen-image4.jpg" alt="" className="card-slider-image"/>
          </div>

         <div className="co-md-3">
            <img src="./media/Shous/shousmen-image5.jpg" alt="" className="card-slider-image"/>
          </div>

         <div className="co-md-3">
            <img src="./media/Shous/shousmen-image6.jpg" alt="" className="card-slider-image"/>
          </div>

         <div className="co-md-3">
            <img src="./media/Shous/shousmen-image7.webp" alt="" className="card-slider-image"/>
          </div>

         <div className="co-md-3">
            <img src="./media/Shous/shousmen-image1.jpg" alt="" className="card-slider-image"/>
          </div>

          
          
      </Slider>
    </div>
    </div>

    </div>
   </div>
  );
}

export default CardSlider1;
