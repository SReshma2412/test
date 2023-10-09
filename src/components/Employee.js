// import Axios from "axios";
// import { useEffect } from "react";
// function Employee() {
//     useEffect(() => {
//         Axios.get("https://jsonplaceholder.typicode.com/users")
//             .then((res) => { res.status === 200 ? console.log(res.data) : Promise.reject() })
//             .catch((err) => {
//                 console.log(err)
//             })
//     }, [])




// }
// export default Employee;
import Axios from "axios";
import { useEffect, useState } from "react";

function EmployeeDetails()
{
    const [data,setData] = useState([]);

    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            if(res.status === 200)
            {
                // console.log(res.data);
                setData(res.data)
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    },[]);
    
    const ListNames = () => {
        return data.map((val)=>{
            return <h1>{val.name}</h1cd>
        })
    }
    return(
        <div>
            {ListNames()}
        </div>
    )
}
export default EmployeeDetails;


