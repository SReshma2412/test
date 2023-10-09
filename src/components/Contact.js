import { useState } from "react";

function Contact()
{
    const [name,setName]=useState("Reshma");
    
    return(
        <div>
            <h1>Contact details</h1>
            <h2>The owener {name}</h2>
            <button onClick={()=>{
        setName("Suresh");
    }}>Change owner</button>
        </div>
    )
}
export default Contact;