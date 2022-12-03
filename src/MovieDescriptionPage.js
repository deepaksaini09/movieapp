import React, {memo, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import MovieDetailPage from "./MovieDetailPage";

function MovieDescriptionPage(){
    const location = useLocation()
    const [moviesData, setMoviesData] = useState([])
    const MovieID = location.pathname.split('-').splice(-1)
    const [isLoaded,setLoaded] =useState(false);

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
    useEffect(()=>{
        FetchAPI()
    },[])


    return(
        <div>
            {isLoaded?<MovieDetailPage  moviesData ={moviesData}></MovieDetailPage>:<h1>Loading .....</h1>}
        </div>
    )
}

export default memo(MovieDescriptionPage);