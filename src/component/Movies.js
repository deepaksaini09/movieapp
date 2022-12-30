import React, {memo, useCallback, useState} from "react";
import Star from "./Star";
import RatePopUpWindow from "./RatePopUpWindow";
import InfiniteScroll from "react-infinite-scroll-component";
import VideoFrame from "./VideoFrame";
import {FaStar} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import '../CSS/Movie.css'
import {useDispatch} from "react-redux";
import {entertainmentType, genresType, yearsType} from "../actions";
import {Button} from "@mui/material";
function Movies({moviesData,fetchMoreData,year,genre,type}){
    const Genres = ['Comedy','Horror','Action','Thriller','Romance','Drama','Animation','Science Fiction',
                    'Science Fiction','Adventure','History','Mystery','Fantasy','Family','Western']
    const Years = [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006,
                   2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990]
    const Languages = ['Hindi','Hollywood','Bollywood','Tamil','Telugu','Malayalam','Korean','English','Japanese']
    console.log(moviesData,'lnkkfed')
    const dispatch = useDispatch()
    return(
            <div className={'container'}>
                <div className={'row'}>
                   <div className={'col-2'}>
                       <div style={{marginTop:'100px'}} className={'card'}>
                           <p style={{color:'black'}}><b>Languages</b></p>
                               <div className={'card'} style={{height:'300px',overflowY:'scroll'}}>
                                   {
                                       Languages.map((currentData,index)=>{
                                           return(
                                               <Button key={index} type={'button'} onClick={()=>dispatch(entertainmentType(currentData))} style={type===currentData?{color:'red'}:{textDecoration:'none'}}>{currentData}</Button>
                                           )
                                       })
                                   }
                               </div>
                           <p style={{color:'black'}}><b>Genres</b></p>
                               <div className={'card'} style={{height:'300px',overflowY:'scroll'}}>
                                   {
                                       Genres.map((currentData,index)=>{
                                           return(
                                               <Button key={index} type={'button'} onClick={()=>dispatch(genresType(currentData))} style={genre===currentData?{borderBottom:'2px solid red',color:"red"}:{textDecoration:'none'}}>{currentData}</Button>
                                           )
                                       })
                                   }
                               </div>
                           <p style={{color:'black'}}><b>Years</b></p>
                               <div className={'card'} style={{height:'300px',overflowY:'scroll'}}>
                                   {
                                       Years.map((currentData,index)=>{
                                           return(
                                               <Button key={index} type={'button'} onClick={()=>dispatch(yearsType(currentData))} style={year===currentData?{borderBottom:'1px solid red',color:'red'}:{textDecoration:'none'}}>{currentData}</Button>
                                           )
                                       })
                                   }
                               </div>
                       </div>
                   </div>

                   <div className={'col-10'}>
                       <div className="container me-2">
                          <InfiniteScroll
                                        dataLength={moviesData.length}
                                        next={fetchMoreData}
                                        hasMore={true}
                                        loader={<h4 style={{textAlign:"center"}}>Loading...</h4>}
                                        endMessage={  <p style={{ textAlign: 'center' }}>
                                                           <b>Yay! You have seen it all</b>
                                                       </p>
                                                    }
                                    > <div className="container">
                                    <div className="row">
                                    {
                                        moviesData.map((currentData)=>{
                                return (

                                    <div className="m-2" style={{width:"20%",borderStyle:"groove",position:'relative',borderRadius:'15px'}} key={currentData.id}>
                                        <div style={{marginLeft:'-14px'}}>
                                            <NavLink to={`/movies/${((currentData.movie_name).split(' ').join('-')).toLowerCase()+'-'+currentData.id}`} className="card-img card-img--lg position-relative"
                                               title=""><img  title={currentData.movie_name} src={currentData.image_link} style={{position:'relative',width:'200px'}} className="img-responsive card transitionImage" alt={currentData.movie_name}/></NavLink>
                                        </div>
                                        <div className={'container'}>
                                             <div className={'row'}>
                                                 <div className={'col-6'}> {currentData.rating_percentage} <FaStar></FaStar></div>
                                                  <div className={'col-6 '}><RatePopUpWindow movieName ={currentData.movie_name} movieID={currentData.id}></RatePopUpWindow></div>
                                             </div>
                                        </div>

                                            <div className={'row'}>
                                            <div className={'col-md-12'} style={{overflow:'hidden',width:'240px',height:'65px'}}>
                                                <b> <label  title={currentData.movie_name}> {currentData.movie_name}</label></b>
                                            </div>

                                        </div>
                                        <div className={'row'} style={{marginTop:'-7px'}}>
                                            <div className={'col-12'}>
                                                 <span style={{textAlign:"right"}}> {currentData.release_date} </span>
                                            </div>
                                        </div>
                                        <div className={"container"}>
                                            <div className={"row"}>
                                                <div title={currentData.movie_name} className={'col-12 card'} style={{backgroundColor:'darkcyan'}}>
                                                    <VideoFrame  movieName ={currentData.movie_name} videLink={currentData.videoTrailerLink} trailer={'Trailer'} style={{width:"100%"}} ></VideoFrame>
                                                </div>
                                            </div>
                                        </div>

                                    </div>)})
                                    }</div>
                                    </div>
                          </InfiniteScroll>
                       </div>
                   </div>
                </div>
            </div>
    )}

export default
memo(Movies);