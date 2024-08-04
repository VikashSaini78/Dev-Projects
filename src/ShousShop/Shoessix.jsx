import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

function ShoesSix() {
    return ( 
        <>




  {/* Explore shous */}



<Box sx={{
    width:"100%",
    height:"20vh",
    // backgroundColor:"red",
    display:'flex',
    justifyContent:"center",
    alignItems:"center",
    fontSize:"25px",
    gap:'3px',
    // backgroundColor:"white"

    
  }}>

    <Link to={"/HomeApi"}>Explore Shous</Link> 
  </Box>



  {/* shous 3 */}



  
            <div className="shous-three-3-1">
            <div className="container">
            <div className="row">
            <div className="col-md-4">
            <div className="shous-three-box-3-2">
           <Link to={"/HomeApi"}>
           <img src="./media/Shous/shousmen-image1.jpg" alt="image error" className="shous-three-box-image"/>
           </Link>
          <Box sx={{
            position:"relative",
            bottom:"250px",
            left:"15px"
          }}>
           <span className=" text-white">#shous</span> <br/>
            <Link style={{
                color:"white",
                textDecoration:"underline"
            }}>Shop Now</Link>
          </Box>

            </div>
</div>


<div className="col-md-4">
           <div className="shous-three-box-3-2">
         <Link to={"/HomeApi"}>
         <img src="./media/Shous/shousmen-image2.webp" alt="image error" className="shous-three-box-image"/>
         </Link>
            <Box sx={{
            position:"relative",
            bottom:"250px",
            left:"15px"
          }}>
           <span className=" text-white">#shous</span> <br/>
            <Link style={{
                color:"white",
                textDecoration:"underline"
            }}>Shop Now</Link>
          </Box>
            </div>
</div>


<div className="col-md-4">
<div className="shous-three-box-3-2">
           <Link to={"/HomeApi"}> <img src="./media/Shous/shousmen-image3.webp" alt="image error" className="shous-three-box-image"/>

            </Link>
            <Box sx={{
            position:"relative",
            bottom:"250px",
            left:"15px"
          }}>
           <span className=" text-white">#shous</span> <br/>
            <Link style={{
                color:"white",
                textDecoration:"underline"
            }}>Shop Now</Link>
          </Box>
            </div>
</div>
</div>
</div>

            </div>






  {/* next shous 3 */}

  


            <div className="shous-three-3-1">
            <div className="container">
            <div className="row">
            <div className="col-md-4">
            <div className="shous-three-box-3-2">
           <Link to={""}>
           <img src="./media/Shous/shousmen-image6.jpg" alt="image error" className="shous-three-box-image"/>
           </Link>
          <Box sx={{
            position:"relative",
            bottom:"250px",
            left:"15px"
          }}>
           <span className=" text-white">#shous</span> <br/>
            <Link style={{
                color:"white",
                textDecoration:"underline"
            }}>Shop Now</Link>
          </Box>

            </div>
</div>


<div className="col-md-4">
           <div className="shous-three-box-3-2">
         <Link>
         <img src="./media/Shous/shousmen-image7.webp" alt="image error" className="shous-three-box-image"/>
         </Link>
            <Box sx={{
            position:"relative",
            bottom:"250px",
            left:"15px"
          }}>
           <span className=" text-white">#shous</span> <br/>
            <Link style={{
                color:"white",
                textDecoration:"underline"
            }}>Shop Now</Link>
          </Box>
            </div>
</div>


<div className="col-md-4">
<div className="shous-three-box-3-2">
           <Link> <img src="./media/Shous/shousmen-image4.jpg" alt="image error" className="shous-three-box-image"/>

            </Link>
            <Box sx={{
            position:"relative",
            bottom:"250px",
            left:"15px"
          }}>
           <span className=" text-white">#shous</span> <br/>
            <Link style={{
                color:"white",
                textDecoration:"underline"
            }}>Shop Now</Link>
          </Box>
            </div>
</div>
</div>
</div>
            </div>




            {/* Shop By Collections */}





            <Box sx={{
                width:"100%",
                height:"20vh",
                backgroundColor:"white",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                fontSize:"30px"
            }}>
            Shop By Collections
            </Box>





            {/* Hastkala */}






         <div className="Hastkala-colom-1">

         <div className="container">
         <div className="row">
         <div className="col-md-6">

         <div className="Hastkala-box-1">
       <Box sx={{
        width:"50%",
        height:"auto",
        // backgroundColor:"yellow"
       }}>
       <div className=" text-center text-4xl mb-2">Hastkala</div>
       <div className=" text-center mb-4">By Shous</div>
       <div className=" text-center">
       Our Handblock collection is crafted using traditional techniques and natural materials, with great care and dedication of our artisans.</div>
       <div className=" text-center mt-4"><Link to={"/HomeApi"}>
       <Button style={{
    
    
    width:"110px",
    height:"50px",
   borderRadius:"50px",
   border:"1px solid black",
   color:"black"
   }}>Shop Now</Button>
       </Link></div>
       </Box>
         </div>

         </div>
         <div className="col-md-6">
         <div className="Hastkala-box-1">
         <Link><img src="./media/Shous/sixshous-image9.png" alt="" className="Hastkala-colom-image"/></Link>

         </div>
        </div>
         </div>
         </div>

         </div>


{/* next  colom*/}


         <div className="Hastkala-colom-1">

         <div className="container">
         <div className="row">
         <div className="col-md-6">
         <div className="Hastkala-box-1">
         <Link><img src="./media/Shous/sixshous-image6.png" alt="" className="Hastkala-colom-image"/></Link>

         </div>
        </div> 
        
        <div className="col-md-6">
         <div className="Hastkala-box-1">
       <Box sx={{
        width:"50%",
        height:"50vh",
        // backgroundColor:"yellow"
       }}>
       <div className=" text-center text-4xl mb-2">Shous</div>
       <div className=" text-center mb-4">By Shous</div>
       <div className=" text-center">
       Our Shous collection is crafted with a fresh spin to your wardrobes.</div>
       <div className=" text-center mt-4"><Button style={{
    
    
        width:"110px",
        height:"50px",
       borderRadius:"50px",
       border:"1px solid black",
       color:"black"
       }}>Shop Now</Button></div>
       </Box>
         </div>

         </div>
         </div>
         </div>

         </div>



  {/* next colom */}

  <div className="Hastkala-colom-1">

         <div className="container">
         <div className="row">
         <div className="col-md-6">
         <div className="Hastkala-box-1">
       <Box sx={{
        width:"50%",
        height:"50vh",
        // backgroundColor:"yellow"
       }}>
       <div className=" text-center text-4xl mb-2">Rangmahal</div>
       <div className=" text-center mb-4">By Shous</div>
       <div className=" text-center">
       A collection designed for the man on the move, celebrating all her roles in life with designs crafted to celebrate her India soul with a global body</div>
       <div className=" text-center mt-4"><Button style={{
    
    
        width:"110px",
        height:"50px",
       borderRadius:"50px",
       border:"1px solid black",
       color:"black"
       }}>Shop Now</Button></div>
       </Box>
         </div>

         </div>
         <div className="col-md-6">
 <div className="Hastkala-box-1">
         <Link><img src="./media/Shous/sixshous-image5.png" alt="" className="Hastkala-colom-image"/></Link>

         </div>
        </div>
         </div>
         </div>

         </div>





{/* next 3 colom */}



<Box sx={{
    width:"100%",
    height:"auto",
    // backgroundColor:"white"
}}>
       
       <div className="container">
       <div className="row">
       <div className="col-md-4">
        
        <div className="hover-shous-three"
        >
         <Link><img src="./media/Shous/sixshous-image6.png" alt="" className="hover-shous-three-img"/> </Link>
        </div>


       </div>

       <div className="col-md-4">
       <div className="hover-shous-three">
         <Link><img src="./media/Shous/sixshous-image1.png" alt="error" className="hover-shous-three-img"/> </Link>
        </div>
       </div>

       <div className="col-md-4">
       <div className="hover-shous-three">
         <Link><img src="./media/Shous/sixshous-image3.png" alt="" className="hover-shous-three-img"/> </Link>
        </div>
       </div>
       </div>
       </div>

</Box>









{/* All on sell */}






<Box sx={{
            width:"100%",
            height:"auto",
            // backgroundColor:"pink",
            marginTop:"40px"
         }}>

         <div className="container">
         <div className="row">
         <div className="col-md-6">
 <div className="sel-box-1">
         <Link><img src="./media/Shous/shous-image5.avif" alt="" className="sel-image"/></Link>

         </div>
        </div> 
        
        <div className="col-md-6">
         <Box sx={{
            width:"100%",
            height:"85vh",
            // backgroundColor:"white",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            
         }}>
       <div className="all-on-sell-nfh">
       <div className=" text-center text-4xl mb-2">All on SALE</div>

       <div className='mt-5 flex justify-between'>
       <Button style={{width:"auto",height:"40px",borderRadius:"50px",border:"1px solid black",color:"black",padding:"5px"}} >Men Shous f Sel</Button>
       <Button style={{width:"auto",height:"40px",borderRadius:"50px",border:"1px solid black",color:"black"}} >kids shous f sel</Button>

       </div> 

        <div className='mt-5 flex justify-between'>
       <Button style={{width:"auto",height:"40px",borderRadius:"50px",border:"1px solid black",color:"black",padding:"5px"}} >huMen Shous  Sel</Button>
       <Button style={{width:"auto",height:"40px",borderRadius:"50px",border:"1px solid black",color:"black"}} >girls shous sel</Button>

       </div> 

       <div className="mt-5 text-center">
       Don't miss special offers
       </div>      
      
       </div>
         </Box>

         </div>
         </div>
         </div>

         </Box>




       {/* humena collection */}

       
       <div className='Shous-girls-links' 
      //  {{
               
      //       }}
            >
           <Link> Shous girls </Link>| <Link style={{color:"gray"}}>Top & Shous girls</Link> | <Link style={{color:"gray"}}>Trending & Shous girls</Link>
            </div>




        </>
     );
}

export default ShoesSix;