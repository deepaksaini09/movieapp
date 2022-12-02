import React, {memo, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import MovieDetailPage from "./MovieDetailPage";

function MovieDescriptionPage(){
    const location = useLocation()
    const [moviesData, setMoviesData] = useState([])
    const MovieID = location.pathname.split('-').splice(-1)
    const [isLoaded,setLoaded] =useState(false);
    const [castActor,setCastActor] = useState([])


    const FetchAPI = async ()=> {
        try {
            // console.log(data, "*****************************************************************************************")
            const res = await fetch(`http://localhost:8000/movie-detail?id=${MovieID}`);
            const jsonData = await res.json();
            setMoviesData(jsonData)
            setLoaded(true);
        } catch (error) {

            console.log(error);
        }
    }
    const FetchAPIForCastActor = async ()=> {
        try {
            // console.log(data, "*****************************************************************************************")
            const res = await fetch(`http://localhost:8000/cast-actor-profile?id=${MovieID}`);
            const jsonData = await res.json();
            setCastActor(jsonData)
        } catch (error) {

            console.log(error);
        }
    }
    useEffect(()=>{
        FetchAPI()
        FetchAPIForCastActor()
    },[])

    return(
        <div>
            {isLoaded?<MovieDetailPage data={moviesData} castActor={castActor}></MovieDetailPage>:<h1>Loading .....</h1>}


        </div>
    )
}

export default memo(MovieDescriptionPage);