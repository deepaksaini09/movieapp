import React from "react";
import {MyContext} from "../App";

function Guest(){
    return (
        <div>
            <h1> Guest component </h1>
            <MyContext.Consumer>

                {({data,handle}) => (
                    <div>
                    <h1> {data.name} and {data.roll}</h1>
                        <button type={'button'} onClick={handle}>click me</button>
                     </div>
                )}

            </MyContext.Consumer>
        </div>
    )
}
export default Guest;














// import React from "react";
//
// function Guest(props){
//     return (
//         <div>
//             <h1>Guest component </h1>
//             <h1>Name: {props.userDetails.name} and roll: {props.userDetails.Roll}</h1>
//         </div>
//     )
// }
// export default Guest;