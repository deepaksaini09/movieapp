import React, {memo, useState} from 'react';
import {Link,NavLink} from 'react-router-dom'
import './NavB.css'
import './Menu.css'
import {genresType, searchMovie, topRated, upComing} from "./actions";
import {useDispatch} from "react-redux";
import {setComingMovies, setTopRated} from "./reduxAction/upDown";
import SearchMovies from "./SearchMovies";

 function Menu({searchM}){
     const [dataSearch,setSearchData]=useState([]);
     console.log(searchM,'forchecking')
      const dispatch = useDispatch()
     // ()=>dispatch(setTopRated(1))
     const setTopRatedMovies =(e)=>{
          // e.preventDefault()
          dispatch(topRated(1))
     }
     const setMoviesForComing=(e)=>{
          // e.preventDefault();
          dispatch(upComing(1));
     }

     async function searchMovies(e) {
         const searchValue = e.target.value;
         if(searchValue){
             e.preventDefault();
          console.log(searchValue,'value 9999999999999999999999999999999999999999999999999')
          setSearchData(searchValue)
         // dispatch(searchMovie(e.target.value))

         const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
                        "searchMovie":searchValue

                })
                            };
    fetch('http://localhost:8000/search-movies', requestOptions)
        .then(response => response.json())
        .then(data =>  dispatch(searchMovie(data)));
         }else{
             dispatch(searchMovie('None'))
         }



    // let response =  await fetch('http://localhost:8000/search-movies', requestOptions);
    //  dataSearch = await response.json();
    //
    // // searchData = data.movie_details;
    // console.log(dataSearch.movie_details,'kkkkkkkkkkkkkkkk');



}

     // console.log(searchData.movie_details,'************saini')

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
                <div>
                    <div className="d-flex" style={{marginTop:'2px'}} >
                        <input  className="form-control ms-4" type="search" placeholder="Search" aria-label="Search"  onChange={searchMovies}/>
                            <button className="btn btn-outline-success" style={{color:'cyan'}} type="submit">Search</button>

                    </div>
                </div>

            </div>

            <div style={{marginLeft:"1100px"}} >

                     <SearchMovies movies={searchM} ></SearchMovies>
                    </div>

        </div>
    )
}
export  default Menu;