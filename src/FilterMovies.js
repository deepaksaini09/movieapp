import React, {memo, useState} from 'react';
import './filterMovies.css'
import {useDispatch} from "react-redux";
import {entertainmentType} from "./actions";
import {NavLink} from "react-router-dom";

function FilterMovies(props){
    // console.log('filter')
       const dispatch = useDispatch()
    // style={({isActive})=> isActive?{borderBottom:'5px solid red'}:{textDecoration:'none'}}
    return(

        <div className={'card'} style={{marginTop:'10px',backgroundColor:"cyan",color:'white'}}>
        <div style={{marginTop:'10px'}} className={'fContainer'}>
                    <NavLink to={'/movies'} style={props.type==='all'?{borderBottom:'2px solid red'}:{textDecoration:'none'}} className={'fItem text-decoration-none'} onClick={()=> dispatch(entertainmentType('all'))}> All </NavLink>
                    <NavLink to={'/movies'} style={props.type==='Hindi'?{borderBottom:'2px solid red'}:{textDecoration:'none'}} className={'fItem text-decoration-none'} onClick={()=> dispatch(entertainmentType('Hindi'))}> Bollywood </NavLink>
                    <NavLink to={'/movies'} style={props.type==='English'?{borderBottom:'2px solid red'}:{textDecoration:'none'}} className={'fItem text-decoration-none'} onClick={()=> dispatch(entertainmentType('English'))}> HollyWood</NavLink>
                    <NavLink to={'/movies'} style={props.type==='Telugu'?{borderBottom:'2px solid red'}:{textDecoration:'none'}} className={'fItem text-decoration-none'} onClick={()=> dispatch(entertainmentType('Telugu'))}> Telugu</NavLink>
                    <NavLink to={'/movies'} style={props.type==='Tamil'?{borderBottom:'2px solid red'}:{textDecoration:'none'}} className={'fItem text-decoration-none'} onClick={()=> dispatch(entertainmentType('Tamil'))}> Tamil</NavLink>
                    <NavLink to={'/movies'} style={props.type==='Malayalam'?{borderBottom:'2px solid red'}:{textDecoration:'none'}} className={'fItem text-decoration-none'} onClick={()=> dispatch(entertainmentType('Malayalam'))}> Malayalam</NavLink>
                    <NavLink to={'/movies'} style={props.type==='Korean'?{borderBottom:'2px solid red'}:{textDecoration:'none'}} className={'fItem text-decoration-none'} onClick={()=> dispatch(entertainmentType('Korean'))}> Korean</NavLink>
        </div>

      </div>
    )
}

export default memo(FilterMovies);