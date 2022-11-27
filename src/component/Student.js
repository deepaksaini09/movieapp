import React from "react";

function Student({video}){
    console.log(video,"videolink")
    return (
        <div>
            <iframe src={video} width="550" height="415"

                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video' />
        </div>
    )
}
export default Student;





















// function Student(props){
//    function handleEvent (e) {
//         console.log("Button clicked");
//        e.preventDefault();
//     };
//
//     return (
//         <div>
//             <h1> hi {props.name}</h1>
//             <button onClick={handleEvent}> click me</button>
//             <a href="http://www.geekyshows.com" onClick={handleEvent}> click me a</a>
//         </div>
//     )
// }
// export  default Student