import React, {memo} from 'react';
import './CSS/MovieDetailPage.css'
import VideoFrame from "./component/VideoFrame";
import {NavLink,Navigate} from "react-router-dom";

function MovieDetailPage({moviesData}){

    const data = moviesData.movie_details;
    const castActor = moviesData.cast_actor_details;
    const socialData = moviesData.social_link;
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
    const redirectPage =(link)=>{
       return <Navigate to={link} replace={true}></Navigate>
    }

     const genre = JSON.parse(data[0]['entertainmentType'].replace(/'/g,'"')).join(',')
     console.log(genre,socialData[0]['facebook_link'])

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
                         <div>
                             <div className={'container'}>
                                 <div className={'row'}>
                                     <div className={'col-6'}>
                                          <ul>
                                             <p style={{color:"black",fontSize:'30px'}}>{data[0]['movie_name']}  ({data[0]['release_date']})</p>
                                          </ul>
                                     </div>
                                     <div className={'col-6'}>
                                         <b>Social Link </b>
                                         <button onClick={redirectPage(socialData[0]['twitter_link'])}><img src={'https://www.themoviedb.org/assets/2/v4/glyphicons/social/twitter-a6ff8c172b8e086f4a64578cee0a16676c1a067b47a1b1b186d58795d241a852.svg'} style={{width:'50px', height:'50px'}}/></button>
                                         <button to={socialData[0]['facebook_link']}><img src={'https://www.themoviedb.org/assets/2/v4/glyphicons/social/facebook-71155d1cd369c47ce8456477833a92c324fa01e6d628cb6ece19cedea3c1c480.svg'} style={{width:'50px', height:'50px'}}/></button>
                                         <button to={socialData[0]['instagram_link']}><img src={'https://www.themoviedb.org/assets/2/v4/glyphicons/social/instagram-74e6299c864adc384258da3b3a8eb09282b7ccda4dd1dfa9a4158ba2ea8583b9.svg'} style={{width:'50px', height:'50px'}}/></button>
                                         <button to={socialData[0]['home_page']}><img src={'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-351-link-5f643a86c2515cb06ea08ebc798941824f76bbcea4ed571222a81f271b30c7f3.svg'} style={{width:'50px', height:'50px'}}/></button>

                                     </div>
                                 </div>
                             </div>

                             <div className={'container'}>
                                 <div className={'row'}>
                                     <div className={'col-6'}>
                                         <ul>
                                             <li style={{color:"black",fontSize:'18px'}}><span>Certificate Movies</span>: UA+</li>
                                             <li style={{color:"black",fontSize:'18px'}}><span>Release Date</span>:  {data[0]['release_date']}</li>
                                             <li style={{color:"black",fontSize:'18px'}}><span>Genre(s)</span>: {genre}</li>
                                             <li style={{color:"black",fontSize:'18px'}}><span>Duration</span>: {data[0]['timePeriod']}</li>
                                             <li style={{color:"black",fontSize:'18px'}}><span>Language</span>: {data[0]['originalLanguage']}</li>
                                         </ul>
                                     </div>
                                     <div className={'col-6'}>
                                         <ul>
                                             <li style={{color:"black",fontSize:'18px'}}><span>Released</span>: {data[0]['releaseOrNot']}</li>
                                             <li style={{color:"black",fontSize:'18px'}}><span>Budget  </span>:  {data[0]['budget']}</li>
                                             <li style={{color:"black",fontSize:'18px'}}><span>Revenue </span>: {data[0]['revenue']}</li>
                                         </ul>
                                     </div>
                                 </div>
                             </div>
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