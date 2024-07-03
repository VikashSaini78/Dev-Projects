import { Box } from "@mui/material";
import CardSlider1 from "./CardSlider1";
import ShoesSix from "./Shoessix";
import Slider from "./Slider";
import Cardslider2 from "./Cardslider2";
import Explor from "./Explor";
import Cardslider3 from "./Cardslider3";


function ShousHome() {



    return ( 
        <>




           <Box sx={{
            backgroundColor:"#D2D2D2"
           }}>
           <Slider/>
            <CardSlider1/>
            <ShoesSix/>
            <Cardslider2/>
            <Explor/>
            <Cardslider3/>
           

           </Box>
        </>
     );
}

export default ShousHome;