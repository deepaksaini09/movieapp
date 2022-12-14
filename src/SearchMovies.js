import React, {memo} from 'react'
import {NavLink} from "react-router-dom";
function SearchMovies({movies,searchValue}){
    console.log(movies,'hi---------------------------------------------',searchValue)
    return(
        <div style={{position:'absolute',borderStyle:'groove',opacity:'1',zIndex:10,backgroundColor:"black"}}>
             {movies!=='None'?(movies.movie_details.length>0?<div style={{width: '300px', height: '500px', border: '1px solid black', overflowY: 'scroll'}}>
                    {movies.movie_details.map((item)=>(
                        <div className={'hoverSearch'}>
                        <NavLink to={`/movies/${((item.movie_name).split(' ').join('-')).toLowerCase()+'-'+item.id}`}
                                           title="">
                        <div className={'DropDown-row'} >

                            <div className={'container'}>
                                <div className={'row'}>
                                    <div className={'col-4'}>
                                        <NavLink to={`/movies/${((item.movie_name).split(' ').join('-')).toLowerCase()+'-'+item.id}`}
                                           title=""><img  title={item.movie_name} src={item.image_link}  className="img-responsive card transitionImage" alt={item.movie_name} style={{width:'50px',height:'60px'}}/></NavLink>
                                    </div>
                                    <div className={'col-8 '}>

                                        <div className={'row'}>
                                            <div className={'col-12'} style={{overflow:'hidden',width:'200px',height:'65px'}}>
                                                <b> <label  title={item.movie_name}> {item.movie_name}</label></b>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                 <hr/>
                            </div>

                        </div>
                        </NavLink>
                            </div>
                    ))}

                </div>:<div  className={'card'} style={{width: '300px', height: '50px',color:'orangered'}}>not found result for {searchValue} </div>)

                    :<h2></h2>}
        </div>
    )
}

export default  memo(SearchMovies);