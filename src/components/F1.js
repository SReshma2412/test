import './style.css';
function F1()
{

    const Mystyle={
        color:"blue",
        backgroundColor: "orange"
    }
    return(
        <div>
            <h1 style={{color:"red"}}>Inline style</h1>
           <h1 style={Mystyle}>Internal style</h1>
        <h1 class="C1">External style</h1>
       <h1 class="text-center text-danger bg-info">Bootstrap style </h1>
        </div>
    )
}
export default F1;