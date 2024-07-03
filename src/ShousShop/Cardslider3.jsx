import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

function Cardslider3() {
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

    <div className="container">
    <div className="row">
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className="co-md-3">
            <Link><img src="./media/Shous/menshous-img2.webp" alt="" style={{width:"90%",height:"60vh"}}/></Link>
            <Box sx={{
                width:"90%",
                height:"auto",
                // backgroundColor:"pink",
                marginBottom:"15px"
            }}>
            <Link style={{color:"gray"}}><p className="mt-2">Shous White Boy</p></Link>
            <p className="mt-2">₹2,000  <del>₹4000</del> (50% of)</p>
            <p className="mt-2 ml-3">on size</p>

            </Box>
          </div>
        </div>
        <div className="co-md-3">
            <img src="./media/Shous/menshous-img3.webp" alt="" style={{width:"90%",height:"60vh"}}/>
            <Box sx={{
                width:"90%",
                height:"auto",
                // backgroundColor:"pink",
                marginBottom:"15px"
            }}>
            <Link style={{color:"gray"}}><p className="mt-2">Shous White Boy</p></Link>
            <p className="mt-2">₹2,000  <del>₹4000</del> (50% of)</p>
            <p className="mt-2 ml-3">on size</p>

            </Box>
          </div>

         <div className="co-md-3">
            <img src="./media/Shous/menshous-img4.jpg" alt="" style={{width:"90%",height:"60vh"}}/>
            <Box sx={{
                width:"90%",
                height:"auto",
                // backgroundColor:"pink",
                marginBottom:"15px"
            }}>
            <Link style={{color:"gray"}}><p className="mt-2">Shous White Boy</p></Link>
            <p className="mt-2">₹2,000  <del>₹4000</del> (50% of)</p>
            <p className="mt-2 ml-3">on size</p>

            </Box>
          </div>

         <div className="co-md-3">
            <img src="./media/Shous/menshous-img5.webp" alt="" style={{width:"90%",height:"60vh"}}/>
            <Box sx={{
                width:"90%",
                height:"auto",
                // backgroundColor:"pink",
                marginBottom:"15px"
            }}>
            <Link style={{color:"gray"}}><p className="mt-2">Shous White Boy</p></Link>
            <p className="mt-2">₹2,000  <del>₹4000</del> (50% of)</p>
            <p className="mt-2 ml-3">on size</p>

            </Box>
          </div>

         <div className="co-md-3">
            <img src="./media/Shous/menshous-img6.webp" alt="" style={{width:"90%",height:"60vh"}}/>
            <Box sx={{
                width:"90%",
                height:"auto",
                // backgroundColor:"pink",
                marginBottom:"15px"
            }}>
            <Link style={{color:"gray"}}><p className="mt-2">Shous White Boy</p></Link>
            <p className="mt-2">₹2,000  <del>₹4000</del> (50% of)</p>
            <p className="mt-2 ml-3">on size</p>

            </Box>
          </div>

         <div className="co-md-3">
            <img src="./media/Shous/menshous-img7.jpeg" alt="" style={{width:"90%",height:"60vh"}}/>
            <Box sx={{
                width:"90%",
                height:"auto",
                // backgroundColor:"pink",
                marginBottom:"15px"
            }}>
            <Link style={{color:"gray"}}><p className="mt-2">Shous White Boy</p></Link>
            <p className="mt-2">₹2,000  <del>₹4000</del> (50% of)</p>
            <p className="mt-2 ml-3">on size</p>

            </Box>
          </div>

         <div className="co-md-3">
            <img src="./media/Shous/menshous-img8.webp" alt="" style={{width:"90%",height:"60vh"}}/>
            <Box sx={{
                width:"90%",
                height:"auto",
                // backgroundColor:"pink",
                marginBottom:"15px"
            }}>
            <Link style={{color:"gray"}}><p className="mt-2">Shous White Boy</p></Link>
            <p className="mt-2">₹2,000  <del>₹4000</del> (50% of)</p>
            <p className="mt-2 ml-3">on size</p>

            </Box>
          </div>

         <div className="co-md-3">
            <img src="./media/Shous/Girlsshous-img8.webp" alt="" style={{width:"90%",height:"60vh"}}/>
            <Box sx={{
                width:"90%",
                height:"auto",
                // backgroundColor:"pink",
                marginBottom:"15px"
            }}>
            <Link style={{color:"gray"}}><p className="mt-2">Shous White Boy</p></Link>
            <p className="mt-2">₹2,000  <del>₹4000</del> (50% of)</p>
            <p className="mt-2 ml-3">on size</p>

            </Box>
          </div>

          <div>
          <div className="co-md-3">
            <img src="./media/Shous/Girlsshous-img4.jpeg" alt="" style={{width:"90%",height:"60vh"}}/>
            <Box sx={{
                width:"90%",
                height:"auto",
                // backgroundColor:"pink",
                marginBottom:"15px"
            }}>
            <Link style={{color:"gray"}}><p className="mt-2">Shous White Boy</p></Link>
            <p className="mt-2">₹2,000  <del>₹4000</del> (50% of)</p>
            <p className="mt-2 ml-3">on size</p>

            </Box>
          </div>
        </div>
        <div className="co-md-3">
            <img src="./media/Shous/Girlsshous-img1.avif" alt="" style={{width:"90%",height:"60vh"}}/>
            <Box sx={{
                width:"90%",
                height:"auto",
                // backgroundColor:"pink",
                marginBottom:"15px"
            }}>
            <Link style={{color:"gray"}}><p className="mt-2">Shous White Boy</p></Link>
            <p className="mt-2">₹2,000  <del>₹4000</del> (50% of)</p>
            <p className="mt-2 ml-3">on size</p>

            </Box>
          </div>
          

         
      </Slider>
    </div>
    </div>

    </div>
    

  
  );
}

export default Cardslider3;
