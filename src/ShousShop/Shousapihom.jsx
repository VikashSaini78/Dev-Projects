import { Box } from "@mui/material";
import Shouscollection from "./Shouscollection";


function Shousapihom({productData}) {

    return ( 
        <>
           
            <Box
            sx={{
                display:"flex",
                justifyContent: "space-evenly",
                flexWrap:"wrap",  
                gap:"50px",
                minHeight: "60vh",
               

            }}
            >

            {productData && productData.map((res)=>(
                    <Shouscollection cardData = {res}/>
            ))}
           
            </Box>
            
        </>
     );
}

export default Shousapihom;