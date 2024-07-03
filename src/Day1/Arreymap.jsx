function Arraymap() {
    let data=["vicky","jaitpuriya","manish","shyam","ram"]
    

    return ( 
        <>
       

        {
            data.map((value,index)=>(
                <ul>
                    <li>
                        {value} 
                       
                    </li>
                </ul>
            ))
        }
          
        </>
     );
}

export default Arraymap;