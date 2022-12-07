import React, {memo} from 'react';
import {Link,NavLink} from 'react-router-dom'
import './NavB.css'
import {genresType, topRated, upComing} from "./actions";
import {useDispatch} from "react-redux";
import {setComingMovies, setTopRated} from "./reduxAction/upDown";

 function Menu(){
      const dispatch = useDispatch()
     // ()=>dispatch(setTopRated(1))
    console.log('ghi')
     const setTopRatedMovies =(e)=>{
          // e.preventDefault()
          dispatch(topRated(1))
     }
     const setMoviesForComing=(e)=>{
          // e.preventDefault();
          dispatch(upComing(1));
     }
    return(
        <div>
         {/*   <div>*/}
         {/*<ul>*/}
         {/*    <li>*/}
         {/*        <NavLink to={'/'}> Home </NavLink>*/}
         {/*    </li>*/}
         {/*    <li>*/}
         {/*        <NavLink to={'/movies'}> Movies</NavLink>*/}
         {/*    </li>*/}
         {/*    <li>*/}
         {/*        <NavLink to={'/tv'}> TV Shows</NavLink>*/}
         {/*    </li>*/}
         {/*    <li>*/}
         {/*        <NavLink to={'/people'}> People</NavLink>*/}
         {/*    </li>*/}
         {/*</ul>*/}
         {/*</div>*/}


            <div className="mnavbar">
                 <NavLink style={({isActive})=> isActive?{borderBottom:'5px solid red'}:{textDecoration:'none'}} to={'/'}> Home </NavLink>
                <div className="mdropdown">
                    <button className="mdropbtn">Movies
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="mdropdown-content">
                         <NavLink style={({isActive})=> isActive?{textDecoration:"underline"}:{textDecoration:'none'}} to={'/movieType'}>Popular</NavLink>
                         <NavLink to={'/movies'} onClick={(e)=>setMoviesForComing(e)}>Upcoming</NavLink>
                         <NavLink to={'/movies'} onClick={(e)=> setTopRatedMovies(e)}>Top Rated</NavLink>
                    </div>
                </div>
                <div className="mdropdown">
                    <button className="mdropbtn">TV Shows
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="mdropdown-content">
                         <NavLink to={'/movies/'}>Popular</NavLink>
                         <NavLink to={'/tv2'}> Upcoming</NavLink>
                         <NavLink to={'/people2'}>Top Rated</NavLink>
                    </div>
                </div>
                <div className="mdropdown">
                    <button className="mdropbtn">People
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="mdropdown-content">
                         <NavLink to={'/movies3'}>Popular People</NavLink>

                    </div>
                </div>
                <form className="d-flex" style={{marginTop:'2px'}}>
                    <input className="form-control ms-4" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" style={{color:'cyan'}} type="submit">Search</button>
                </form>
            </div>



        </div>
    )
}
export  default memo(Menu);