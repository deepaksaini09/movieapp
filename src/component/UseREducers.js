import React,{useReducer} from "react";

const initailValue =0;
const reducer = (state,action)=>{
    console.log(state,action);
}

function UseREducers(){
    const [state,dispatch] =useReducer(reducer,initailValue)
    return(
         <div className={"container  text-center"}>
             <p > {state}</p>
            <button type={"button"} className={"me-2"} onClick={()=> dispatch({type:"DEC"})}> - </button>
             <button type={"button"} onClick={()=> dispatch({type:"INC"})} n> + </button>
         </div>
    )
}
export default UseREducers;














// import React ,{useState} from "react";
//
// function UseREducers(){
//     const [count,setCount] = useState(0)
//     return (
//         <div className={"container  text-center"}>
//             <p > {count}</p>
//             <button type={"button"} className={"me-2"} onClick={()=> setCount(count-1)}> - </button>
//             <button type={"button"} onClick={()=> setCount(count+1)} n> + </button>
//         </div>
//     )
// }
//
// export default UseREducers