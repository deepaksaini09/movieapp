import React from "react";
import {Link,NavLink} from "react-router-dom";

function Navbar(){
    return(
        <div>
            {/*<ul>*/}
            {/*    <li>*/}
            {/*        <Link to={'/'}>Home</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to={'/about'}>About</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to={'/contact'}> Contact</Link>*/}
            {/*    </li>*/}
            {/*</ul>*/}
            <ul>
                <li>
                    <NavLink to={'/'} style={{color:"red"}}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/about'} style={{color:"green"}}>About</NavLink>
                </li>
                <li>
                    <NavLink to={'/contact'} style={({isActive})=>{return {backgroundColor : isActive?"red":''}}}> Contact</NavLink>

                </li>
                 <li>
                    <NavLink to={'/post/raju'} style={{color:"yellowgreen",textDecoration:"none"}}> post</NavLink>

                </li>
                <li>
                    <NavLink to={'/post/raju/1'} style={{color:"yellowgreen"}}> post</NavLink>

                </li>
            </ul>

        </div>
    )
}

export default Navbar;