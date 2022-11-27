import React,{useState} from "react";
import {FaStar} from "react-icons/fa";
// import {useState} from "react";

const colors ={
    orange:"blue",
    grey:"grey",
}
function Star(){
    const stars = Array(10).fill(0);
    const [currentValue,setCurrentValue] = useState(0);
    const [hoverValue , setHoverValue] = useState(undefined);

    const handleClick = (value)=>{
        setCurrentValue(value);
    }
    const handleMouseOver = (value)=>{
        setHoverValue(value);
    }
    console.log()
    const handleMouseLeave = ()=>{
        setHoverValue(undefined);
    }
    console.log('clicked');
    return(
        <div style={Style}>

            <h1 > current rank is :{currentValue}</h1>
            <div>{stars.map((_,index)=>{
                return (

                    <FaStar keyPoints={index} size={24} style={{marginRight:10,cursor:"pointer"}}
                     color={(hoverValue || currentValue)>index?colors.orange:colors.grey}
                     onClick={()=>handleClick(index+1)}
                     onMouseOver={()=>handleMouseOver(index+1)}
                     onMouseLeave={handleMouseLeave}


                    />
                )
            })}</div>
        </div>
    )
}
const Style ={
        display:"flex",
        flexDirection:"column",
        alignment:"center",

}

export default Star;