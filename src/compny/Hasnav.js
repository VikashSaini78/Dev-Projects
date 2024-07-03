import { Link } from "react-router-dom";


function Hasnav() {
    return ( 
        <>
            <div className="w-scern h-16 bg-lime-500">
            <div className="container">
            <div className="row">
            <div className="com-md-12">
               
               <div className="p-3">
                <h1>LOGO</h1>
               </div>

               <div className=""> 
               {/* <li><Link to ="">Todu</Link></li>
                <li><Link to ="">Counter</Link></li>
                <li><Link to ="">Product</Link></li>
                <li><Link to ="">Statetest</Link></li> */}
                <a href="">about</a>

               </div>


            </div>
            </div>
            </div>
            </div>
        </>
     );
}

export default Hasnav;