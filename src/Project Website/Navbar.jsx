import { Link } from "react-router-dom";
import "./Navbar.css"
function Navbar() {
    return ( 
        <>
          <div className="div-container">
            <ul>
                {/* <li><Link to="">home </Link></li> */}
                <li><Link to ="./HomePage">Home</Link></li>
                <li><Link to ="./RecipeReviewCard">RecipeReviewCard</Link></li>
                <li><Link to ="./Todu">Todu</Link></li>
                <li><Link to ="./Counter">Counter</Link></li>
                <li><Link to ="/Product">Product</Link></li>
                <li><Link to ="/Statetest">Statetest</Link></li>
                
               
              
            </ul>
          </div>
        </>
     );
}

export default Navbar;