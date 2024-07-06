import { Box } from "@mui/material";
import { Link } from "react-router-dom";

function Slider() {
    return ( 
        <>
    

    <div className="slide-only-1">
    <div className="slider-media-sgm">
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <Box
  //  sx={{
  //   width: '100%',
  //   height:"80vh",
  //   backgroundColor:"pink"
  // }}
  >
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./media/Shous/shous-image10.avif" className="slide-only-img" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="./media/Shous/shous-image1.avif" className="slide-only-img" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="./media/Shous/shous-image5.avif" className="slide-only-img" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  </Box>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
    </div>







{/* new Trending */}







  <Box sx={{
    width:"100%",
    height:"20vh",
    // backgroundColor:"red",
    display:'flex',
    justifyContent:"center",
    alignItems:"center",
    fontSize:"25px",
    gap:'3px',
    backgroundColor:"white"

    
  }}>
    <Link> New</Link> | <Link style={{color:"gray"}}>Trending</Link>
  </Box>
        </>
     );
}

export default Slider;