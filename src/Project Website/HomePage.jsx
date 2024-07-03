import styled from "@emotion/styled";
import { Box,Button,Div, TextField } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationOn from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocalPhone from "@mui/icons-material/LocalPhone";
import MarkunreadSharpIcon from '@mui/icons-material/MarkunreadSharp';
import MarkunreadSharp from "@mui/icons-material/MarkunreadSharp";

function Homepage() {


   
    return (
        <>
        <div style={{backgroundColor:""}}>
        <div className="container">
            <div className="row">
            <div className="col-md-6">
            <h1 style={{fontSize:"60px"}}> <strong>Hii <br/><span style={{color:"tomato"}}> Developer</span></strong> </h1>
            <p style={{color:"gray"}}> Eligendi voluptatum quibusdam provident quam repudiandae neque delectus temporibus, veniam autem dignissimos odit earum, sapiente vero totam rerum rem maiores aut iure.</p>

            <button style={{width:"120px",outline:"none",border:"none",backgroundColor:"tomato",color:"white",height:"40px",borderRadius:"7px"}}>Submit</button>

            </div>
            <div className="col-md-6">
                
                <img style={{width:"100%"}} src="./media/Box_image.webp" alt="errer"/>
            </div>

            </div>
            </div>
        </div>

        {/* container2 */}




        <div style={{backgroundColor:""}}>
        <div className="container">
            <div className="row">
            <div className="col-md-6">
              <img style={{width:"100%"}} src="./media/laptop-user3.webp" alt="errer"/>

            </div>
            <div className="col-md-6">
                
            <h2 style={{marginTop:"60px"}}><strong>React Development is carried out by passionte Developers</strong></h2>    <br/>
            <p style={{color:"gray"}}>I spend most of my working days writing code for web applications, or doing DevOps related to running said services, but that’s far from all that I do. There’s a big difference between being a coder and being a developer.When I started at Tammerforce, I joined a client team as the fourth developer. 
            <br/>
            <br/>
            
            
            the Tampere office of Futurice, as a summer employee in May 2018. My background was not the most typical one for a software developer. I had a Bachelor’s degree in Business </p>
            </div>

            </div>
            </div>
        </div>




        {/* container3 */}




        <div style={{backgroundColor:""}}>
        <div className="container">
            <div className="row">
            <div className="col-md-6">
             <div style={{width:"80%",height:"auto",backgroundColor:"#e0dcd1",margin:"auto",marginTop:"30px", padding:"20px",borderRadius:"10px"}}>
             <h2 style={{textAlign:"",marginBottom:"10px"}}><strong>Get in touch:</strong></h2>
             <h5 style={{textAlign:"",marginBottom:"10px"}}>Fill in the form to start a conversation</h5>
             <p> <LocationOn color="info"/>   Banskhoh,Bassi,jaipur,Rajasthan</p>
             <p> <LocalPhone/>   +91 7878599144</p>
             <p> <MarkunreadSharp/>  vikashbanskhoh@gmail.com</p>

             </div>
            </div>
            <div className="col-md-6">
                
            <TextField id="outlined-basic" label="Nmae" variant="outlined" style={{width:"100%",marginTop:"50px"}} />
            <TextField id="outlined-basic" label="Email" variant="outlined" style={{width:"100%",marginTop:"20px"}} />
            <TextField id="outlined-basic" label="Telephone number" variant="outlined" style={{width:"100%",  marginTop:"20px"}} />

            <Button style={{marginTop:"20px",width:"120px"}} variant="contained" color="success">Submit</Button>
            
            </div>

            </div>
            </div>
        </div>










{/* container4 */}







        </>
      );
}

export default Homepage;