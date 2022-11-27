import React from "react";
import Star from "./Star";
import RatePopUpWindow from "./RatePopUpWindow";
import InfiniteScroll from "react-infinite-scroll-component";
function Movies({moviesData,fetchMoreData}){
    return(

            <div className="container me-2">


                    <InfiniteScroll
                            dataLength={moviesData.length}
                            next={fetchMoreData}
                            hasMore={true}
                            loader={<h4>Loading...</h4>}
                        ><div className="row">
                        {
                            moviesData.map((currentData)=>{
                    return (

                        <div className="col-sm-2 ms-2 card" style={{width:"20%"}}>
                            <a href={currentData.url} className="card-img card-img--lg relative"
                               title=""><img src={currentData.image} style={{marginRight:"10px"}}
                                             className="img-responsive"/></a>
                            <b> <label> {currentData.name}</label></b>
                            <span>
                                <RatePopUpWindow movieName ={currentData.name}></RatePopUpWindow>
                            </span>
                             <span style={{textAlign:"right"}}> Aug 12,2022 </span>
                            <div> trailer</div>
                        </div>)})
                        }</div>
                        </InfiniteScroll>







            </div>
    )}

export default Movies;