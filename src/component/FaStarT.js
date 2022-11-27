import React, {useState} from "react";
import {FaStar} from "react-icons/fa"

function FaStarT(){
    const color = {
        grey:"grey",
        blue:"blue",
    }
    const array = Array(10).fill(0);
    const [currentValue,setCurrentValue] = useState(0);
    const [hoverValue,setHoverValue] = useState(undefined);
    const handleClick =(value)=>{
       setCurrentValue(value);
    }
    const setHoverVal =(value)=>{
        setHoverValue(value);
    }
    const setMouseLeave =()=>{
        setHoverValue(undefined)
    }
    return (
        <div>
          <h1>this is {currentValue}for fa-star </h1>
            <div>{array.map((_,index)=>{
                return(
                    <FaStar keyPoints={index}  color={(hoverValue || currentValue)>index?color.blue:color.grey}
                    onClick={()=>handleClick(index+1)} onMouseOver={()=>setHoverVal(index+1)} onMouseLeave={setMouseLeave
                    }></FaStar>
                )
            })}</div>

        </div>
    )
}
export default FaStarT;