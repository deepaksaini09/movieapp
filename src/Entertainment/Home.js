import React, {memo, useCallback, useEffect, useState} from "react";
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

function Home({type,genre,year,top,coming}){
    const [data,setData] = useState([]);
    const [isLoaded,setLoaded] =useState(false);
    const [page,setPage] = useState(0);
    const [pageExecute,setPageExecute] = useState(false);
    // `http://127.0.0.1:8000/path?limit=10&page=${page}&type=${type}`
    // const Ap = `http://localhost:8000/years-genre-language?years=${year}&genres=${genre}&topRated=0&limit=10&page=${page}&type=${type}`
    // console.log(Ap)
    console.log('pageNo',page)
    const FetchAPI = async ()=> {
        try {
            console.log(data, "*****************************************************************************************")
            const res = await fetch(`http://localhost:8000/years-genre-language?years=${year}&genres=${genre}&topRated=${top}&limit=10&page=${page}&type=${type}&upComing=${coming}`);
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
            const res = await fetch(`http://localhost:8000/years-genre-language?years=${year}&genres=${genre}&topRated=${top}&limit=10&page=0&type=${type}&upComing=${coming}`);
            const jsonData = await res.json();

            setData(jsonData)
            console.log('fetchapi', data)
            setLoaded(true)

        } catch (error) {

            console.log(error);
        }
    }

 // // setTimeout(()=>{},5000);
 //    useEffect( async ()=>{
 //        setPage(0);
 //       FetchAPI1()
 //    },[type,year])

    useEffect(  ()=>{
         setPage(0);
         setPageExecute(true);
        FetchAPI1()
        console.log(pageExecute,"(((((((((((((((((((((((((((((((((")
    },[type,year,genre,top,coming])


    // useEffect(()=>{
    //     console.log(data,"data inside in");
    // },[type,genre,year])

    useEffect(()=>{
        if(page>=1){
            FetchAPI()
        console.log(page,'--------------------------------------------------------------------')
        }

    },[page]);


    const fetchMoreData = useCallback(() => {
         if(data){
              setPage(page + 1);
         }
    },[data])


    return (
        <div>
            {/*<h1 > Movie {type} 1</h1>*/}

            {isLoaded? <Movies moviesData={data} fetchMoreData={fetchMoreData} year={year} genre={genre} type={type}></Movies>:<h1>Loading.....</h1>}

        </div>
    )
}
export default     memo(Home);
