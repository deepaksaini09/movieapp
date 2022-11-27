// import React from "react";
// import Guest from "./Guest";
//
// function User(){
//     return (
//         <div>
//             <h1>User Component </h1>
//             <Guest></Guest>
//         </div>
//     )
// }
//
//
// export default User;



import React from "react";
import Guest from "./Guest";

function User(props){
    return (
        <div>
            <h1>User component</h1>
            <Guest userDetails ={props.userData}></Guest>
        </div>
    )
}


export default User;