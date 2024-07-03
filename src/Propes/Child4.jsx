import { firstname } from "../App";
function Child4() {
    // const{name}=props
    return (  
        <>
            <h5>Child4</h5>
            
            <firstname.Consumer>
           {
                  (name)=>{
                return(
                    <h1>{name}</h1>
                )
                  }
           }
            </firstname.Consumer>
            
        </>
    );
}

export default Child4;