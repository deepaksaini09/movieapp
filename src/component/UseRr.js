import React, {useRef, useState} from "react";

function UseRr(){
    const name = useRef(1);
    const [nameT,setName] = useState('hi');
   const handle =(e)=>{
       console.log(e.target.value);
       setName(e.target.value);

   }
   const changeColor =()=>{
       setName('');
       name.current.focus();
   }
   const handleInput = ()=>{
       name.current.style.color = 'blue';
    }
    return(
        <div>
            <h1> {nameT}</h1>
            <input ref={name} type={'text'} onChange={(e)=>handle(e)} value={nameT}/>
            <button type={'button'} style={{marginLeft:'2px'}} onClick={changeColor}> Click me</button>
            <button type={'button'} onClick={handleInput}> handle input</button>
        </div>
    )
}
export default UseRr;