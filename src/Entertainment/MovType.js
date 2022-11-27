import React, {useCallback, useEffect, useState} from "react";
import Movies from "../component/Movies"
import Student from "../component/Student";
import {FaStar} from "react-icons/fa";
import RatePopUpWindow from "../component/RatePopUpWindow";
import RouterPath from "../RouterPath";
import FilterMovies from "../FilterMovies";
import {useSelector} from "react-redux";
import {Provider} from "react-redux";
import store from "../storeReducer";

function MovType({type}){
    const [data,setData] = useState([]);
    const [isLoaded,setLoaded] =useState(false);
    const [page,setPage] = useState(0);
    const API = `http://127.0.0.1:8000/path?limit=10&page=${page}&type=Hindi`
     setTimeout(()=>{

    },5000);


    const fetchAPI = async ()=>{
        try{
          const res =await fetch(API);
          const jsonData = await res.json();
          console.log(data, 'data is here .......')
          setData(data.concat(jsonData))
            setLoaded(true)
        }catch (error){
          console.log(error);
        }
    };


    useEffect(()=>{
        fetchAPI()
    },[page]);

    const fetchMoreData = useCallback(() => {
        setPage(page + 1);
    },[data])

    return (
        <div>
            <h1> Movies </h1>
            {isLoaded? <Movies moviesData={data} fetchMoreData={fetchMoreData}></Movies>:<h1>Loading.....</h1>}

        </div>
    )
}
export default MovType;
