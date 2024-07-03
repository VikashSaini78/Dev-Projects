import Child3 from "./Child3";

function Child2() {
    // const{name}=props
    return (  
        <>
            <h1>Child2</h1>
            <Child3/>
            {/* <Child3 name={name}/> */}
        </>
    );
}

export default Child2;