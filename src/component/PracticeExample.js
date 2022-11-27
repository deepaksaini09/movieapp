import React,{useState} from "react";

function PracticeExample(){
    const [name,setName] = useState("Deepak")
    const  activateLaserPart =(value)=>{
        // console.log(e)
        setName(value);
    }
    const arr = [1,2,3,4,5,6]
    return (
        <div>
            {arr.map((value)=><h1>{value}</h1>)}

        </div>
    )
}

export default PracticeExample;