import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

function ShoesSix() {
    return ( 
        <>

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
    <Link to={"/HomeApi"}>Explore Shous</Link> 
  </Box>

            <Box sx={{
                width:'100%',
                height:"auto",
                // display:"flex",
                // justifyContent:"center",
                // alignItems:"center",
                // backgroundColor:"white"
            }}>
            <div className="container">
            <div className="row">
            <div className="col-md-4">
            <Box sx={{
                width:"100%",
                height:"73vh",
                // boxShadow:'1px 1px 1px 1px gray'
                // backgroundColor:"pink"
            }}>
           <Link to={"/HomeApi"}>
           <img src="./media/Shous/shousmen-image1.jpg" alt="image error" style={{
                 width:"100%",
                 height:"73vh",
            }}/>
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

            </Box>
</div>


<div className="col-md-4">
           <Box sx={{
                width:"100%",
                height:"73vh",
                // backgroundColor:"pink"
            }}>
         <Link to={"/HomeApi"}>
         <img src="./media/Shous/shousmen-image2.webp" alt="image error" style={{
                 width:"100%",
                 height:"73vh",
            }}/>
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
            </Box>
</div>


<div className="col-md-4">
<Box sx={{
                width:"100%",
                height:"73vh",
                // backgroundColor:"pink"
            }}>
           <Link to={"/HomeApi"}> <img src="./media/Shous/shousmen-image3.webp" alt="image error" style={{
                 width:"100%",
                 height:"73vh",
            }}/>

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
            </Box>
</div>
</div>
</div>

            </Box>



            <Box sx={{
                width:'100%',
                height:"auto",
                marginTop:"25px"
                // display:"flex",
                // justifyContent:"center",
                // alignItems:"center"
                // backgroundColor:"white"
            }}>
            <div className="container">
            <div className="row">
            <div className="col-md-4">
            <Box sx={{
                width:"100%",
                height:"73vh",
                boxShadow:'1px 1px 1px 1px gray'
                // backgroundColor:"pink"
            }}>
           <Link to={""}>
           <img src="./media/Shous/shousmen-image6.jpg" alt="image error" style={{
                 width:"100%",
                 height:"73vh",
            }}/>
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

            </Box>
</div>


<div className="col-md-4">
           <Box sx={{
                width:"100%",
                height:"73vh",
                // backgroundColor:"pink"
            }}>
         <Link>
         <img src="./media/Shous/shousmen-image7.webp" alt="image error" style={{
                 width:"100%",
                 height:"73vh",
            }}/>
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
            </Box>
</div>


<div className="col-md-4">
<Box sx={{
                width:"100%",
                height:"73vh",
                // backgroundColor:"pink"
            }}>
           <Link> <img src="./media/Shous/shousmen-image4.jpg" alt="image error" style={{
                 width:"100%",
                 height:"73vh",
            }}/>

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
            </Box>
</div>
</div>
</div>
            </Box>



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




         <Box sx={{
            width:"100%",
            height:"auto",
            // backgroundColor:"pink"
         }}>

         <div className="container">
         <div className="row">
         <div className="col-md-6">
         <Box sx={{
            width:"100%",
            height:"85vh",
            // backgroundColor:"white",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            
         }}>
       <Box sx={{
        width:"50%",
        height:"50vh",
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
         </Box>

         </div>
         <div className="col-md-6">
 <Box sx={{
            width:"100%",
            height:"85vh",
            backgroundColor:"gray"
         }}>
         <Link><img src="./media/Shous/Hast-img.webp" alt="" style={{width:"100%",height:"85vh"}}/></Link>

         </Box>
        </div>
         </div>
         </div>

         </Box>


{/* next  colom*/}


         <Box sx={{
            width:"100%",
            height:"auto",
            // backgroundColor:"pink",
            marginTop:"40px"
         }}>

         <div className="container">
         <div className="row">
         <div className="col-md-6">
 <Box sx={{
            width:"100%",
            height:"85vh",
            backgroundColor:"gray"
         }}>
         <Link><img src="./media/Shous/shous-image3.webp" alt="" style={{width:"100%",height:"85vh"}}/></Link>

         </Box>
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
         </Box>

         </div>
         </div>
         </div>

         </Box>



  {/* next colom */}

  <Box sx={{
            width:"100%",
            height:"auto",
            // backgroundColor:"pink"
         }}>

         <div className="container">
         <div className="row">
         <div className="col-md-6">
         <Box sx={{
            width:"100%",
            height:"85vh",
            // backgroundColor:"white",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            
         }}>
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
         </Box>

         </div>
         <div className="col-md-6">
 <Box sx={{
            width:"100%",
            height:"85vh",
            backgroundColor:"gray"
         }}>
         <Link><img src="./media/Shous/Rangmahal-image2.jpg" alt="" style={{width:"100%",height:"85vh"}}/></Link>

         </Box>
        </div>
         </div>
         </div>

         </Box>





{/* next 3 colom */}



<Box sx={{
    width:"100%",
    height:"auto",
    // backgroundColor:"white"
}}>
       
       <div className="container">
       <div className="row">
       <div className="col-md-4">
        
        <Box sx={{
            width:"100%",
            height:"70vh",
            boxShadow:"20px 5px 50px 5px gray",
            marginTop:"70px"
        }}>
         <Link><img src="./media/Shous/sixshous-image6.png" alt=""/> </Link>
        </Box>


       </div>

       <div className="col-md-4">
       <Box sx={{
            width:"100%",
            height:"70vh",
            boxShadow:"20px 5px 50px 5px gray",
            marginTop:"70px"
        }}>
         <Link><img src="./media/Shous/sixshous-image5.png" alt=""/> </Link>
        </Box>
       </div>

       <div className="col-md-4">
       <Box sx={{
            width:"100%",
            height:"70vh",
            boxShadow:"20px 5px 50px 5px gray",
            marginTop:"70px"
        }}>
         <Link><img src="./media/Shous/sixshous-image3.png" alt=""/> </Link>
        </Box>
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
 <Box sx={{
            width:"100%",
            height:"85vh",
            backgroundColor:"gray"
         }}>
         <Link><img src="./media/Shous/shous-image5.avif" alt="" style={{width:"100%",height:"85vh"}}/></Link>

         </Box>
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
       <Box sx={{
        width:"63%",
        height:"65vh",
        // backgroundColor:"yellow"
       }}>
       <div className=" text-center text-4xl mb-2">All on SALE</div>

       <div className='mt-5 flex justify-between'>
       <Button style={{width:"auto",height:"40px",borderRadius:"50px",border:"1px solid black",color:"black",padding:"5px"}} >Men Shous for Sel</Button>
       <Button style={{width:"auto",height:"40px",borderRadius:"50px",border:"1px solid black",color:"black"}} >kids shous for sel</Button>

       </div> 

        <div className='mt-5 flex justify-between'>
       <Button style={{width:"auto",height:"40px",borderRadius:"50px",border:"1px solid black",color:"black",padding:"5px"}} >huMen Shous for Sel</Button>
       <Button style={{width:"auto",height:"40px",borderRadius:"50px",border:"1px solid black",color:"black"}} >girls shous for sel</Button>

       </div> 

       <div className="mt-5 text-center">
       Don't miss special offers
       </div>      
      
       </Box>
         </Box>

         </div>
         </div>
         </div>

         </Box>




       {/* humena collection */}

       
       <Box sx={{
                width:"100%",
                height:"20vh",
                backgroundColor:"white",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                fontSize:"23px",
                gap:"16px"
            }}>
           <Link> Shous girls </Link>| <Link style={{color:"gray"}}>Top & Shous girls</Link> | <Link style={{color:"gray"}}>Trending & Shous girls</Link>
            </Box>




        </>
     );
}

export default ShoesSix;