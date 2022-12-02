import React, {memo} from 'react';
import './CSS/MovieDetailPage.css'
import VideoFrame from "./component/VideoFrame";
import {NavLink} from "react-router-dom";
function MovieDetailPage({data,castActor}){
    console.log(data);
    const style1 ={
        backgroundImage:`url(${data[0]['poster_image']})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'100%',
        width:'100%',
        height:'500px',
        opacity:'0.8',
        borderStyle:'inset',
        marginTop:'3px',
        position:'relative',


    }
    console.log(castActor)
     const genre = JSON.parse(data[0]['entertainmentType'].replace(/'/g,'"')).join(',')
     console.log(genre)

    return(
        <div>
            <div style={style1} className={'transitionImage'}>
                <div className="container">
                    <div className="row">

                        <div className="col">
                            <VideoFrame videLink={data[0]['videoTrailerLink']} movieName={data[0]['movie_name']} trailer={<h1 className={'fa fa-play-circle'} style={{color:'blue',marginTop:'200px',marginLeft:'10px',fontSize:'100px'}}></h1>} ></VideoFrame>

                        </div>
                    </div>
                </div>

            </div>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                       <div style={{marginTop:'-100px'}} className={'card'}>
                             <img className={'transitionImage card'}  src={data[0]['image_link']} alt={data[0]['movie_name']}/>
                       </div>
                    </div>
                    <div className="col-9 card" style={{borderStyle:'outset'}}>
                         <div >
                            <ul>
                                <p style={{color:"black",fontSize:'40px'}}>{data[0]['movie_name']}  ({data[0]['release_date']})</p>
                            </ul>
                             <ul>
                                 <li style={{color:"black",fontSize:'18px'}}><span>Certificate Movies</span>: UA+</li>
                                 <li style={{color:"black",fontSize:'18px'}}><span>Release Date</span>:  {data[0]['release_date']}</li>
                               <li style={{color:"black",fontSize:'18px'}}><span>Genre(s)</span>: {genre}</li>
                               <li style={{color:"black",fontSize:'18px'}}><span>Duration</span>: {data[0]['timePeriod']}</li>
                                 <li style={{color:"black",fontSize:'18px'}}><span>Language</span>: {data[0]['originalLanguage']}</li>
                             </ul>
                         </div>
                    </div>
                </div>
            </div>


            <div className={'container'} style={{marginTop:'10px'}}>
               <div className={'row'}>
                   <div className={'col-3'}>

                   </div>
                   <div className={'col-9 card'}>
                      <h3 style={{color:'black'}}>
                              Movie Overview
                      </h3>
                     <ul>
                         <li style={{color:"black",fontSize:'18px'}}>
                             {data[0]['movieOverView']}
                         </li>
                     </ul>
                   </div>
               </div>
            </div>
            <div className={'card'} style={{marginLeft:'100px',marginRight:'100px',marginTop:'10px'}}>
            <div className={'container'} style={{marginTop:'10px'}}>
                <h3>Cast Actor</h3>
               <div className={'row'}>

                       {
                           castActor.map((currentData)=>{
                               return(
                                   <div className={"col-2"}>
                                       <div className={'card'} style={{width:'200px',height:'400px'}}>
                                           <NavLink to={'/m'}><img src={currentData['imageOfCastPerson']} style={{width:'100%'}} className={'card transitionImage'}/></NavLink>
                                           <div className={'container'}>
                                               <div className={'row'}>
                                                   <div className={'col-12'}>
                                                       <p> {currentData['characterName']}</p>
                                                   </div>
                                               </div>
                                           </div>
                                           <div className={'container'}>
                                               <div className={'row'}>
                                                   <div className={'col-12'}>
                                                     <p style={{color:'black'}}><b>{currentData['realName']}</b></p>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               )
                           })
                       }

               </div>
            </div>
            <div >
               h
            </div>

        </div>
        </div>
    )
}

export default memo(MovieDetailPage);