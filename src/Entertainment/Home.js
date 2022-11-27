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
import {useNavigate} from "react-router-dom";

function Home({type}){
    const [data,setData] = useState([]);
    const [isLoaded,setLoaded] =useState(false);
    const [page,setPage] = useState(0);
    const [type1,setTyp1] = useState(0);
    if(data){
        console.log('empty')
    }else {
        console.log("not empty")
    }

    const FetchAPI = async ()=> {
        try {
            console.log(data, "*****************************************************************************************")
            const res = await fetch(`http://127.0.0.1:8000/path?limit=10&page=${page}&type=${type}`);
            const jsonData = await res.json();

            setData(data.concat(jsonData))
            console.log('fetchapi', data)
            setLoaded(true)

        } catch (error) {

            console.log(error);
        }
    }

    const FetchAPI1 = async ()=> {
        try {
            console.log(data, "*****************************************************************************************")
            const res = await fetch(`http://127.0.0.1:8000/path?limit=10&page=${page}&type=${type}`);
            const jsonData = await res.json();

            setData(jsonData)
            console.log('fetchapi', data)
            setLoaded(true)

        } catch (error) {

            console.log(error);
        }
    }



    useEffect(()=>{
        setPage(0);
        // setTimeout(()=>{},5000);
        FetchAPI1()
    },[type])


    useEffect(()=>{
        console.log(data,"data inside in");
    },[type])

    useEffect(()=>{
        FetchAPI()
    },[page]);


    const fetchMoreData = useCallback(() => {
         if(data){
              setPage(page + 1);
         }
    },[data])


    return (
        <div>
            {/*<h1 > Movie {type} 1</h1>*/}

            {isLoaded? <Movies moviesData={data} fetchMoreData={fetchMoreData} ></Movies>:<h1>Loading.....</h1>}

        </div>
    )
}
export default Home;
