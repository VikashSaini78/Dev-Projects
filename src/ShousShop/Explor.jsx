import { Box, Typography } from "@mui/material";

function Explor() {
    return ( 
        <>
             <Box sx={{
                width:"100%",
                height:"40vh",
                backgroundColor:"white",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                marginTop:"25px"
             
            }}>
           <Box>
           <Typography variant="h3">Explore- Shous Men</Typography> 
           <p className=" text-center mt-4">Shop classic styles for the Modern Man</p>
           </Box>
                </Box>
                
{/*                
                <Box sx={{
                width:"100%",
                height:"10vh",
                backgroundColor:"white",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
             
            }}>
           <p>Shop classic styles for the Modern Man</p>  
                </Box> */}
        </>
     );
}

export default Explor;