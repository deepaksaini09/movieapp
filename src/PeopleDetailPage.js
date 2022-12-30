import React, {memo, useEffect, useState} from "react";
import {searchMovie, setActorNameAPI} from "./actions";
import {useDispatch, useSelector} from "react-redux";
import PeopleInfo from "./PeopleInfo";
import {setActorAPIData} from "./reduxAction/upDown";
function PeopleDetailPage(){
     const [actor, setActorData] = useState('')
     const [loaded, setLoaded] = useState(false);
    const actorName = useSelector((state)=>state.setActorName)
    // const actorAPIData = useSelector((state)=>state.setActorAPIData)
    //  const dispatch = useDispatch()
   const FetchAPI = async ()=> {
        try {
            // console.log(data, "*****************************************************************************************")
            const res = await fetch(`http://localhost:8000/actor-page?actorName=${actorName}`);
            const jsonData = await res.json();
            // dispatch(setActorNameAPI(jsonData))
            setActorData(jsonData)
            setLoaded(true);
        } catch (error) {

            console.log(error);
        }
    }

  useEffect(()=>{
            if(actorName.length>0){
                FetchAPI()
            }

    },[actorName]);
   if(loaded){
       console.log(actor['movies'][0]['movie_name'])
   }

    return(
        <div>
            <div>{
                loaded?<PeopleInfo actor={actor}></PeopleInfo>:<h1> loading....</h1> }
            </div>

        </div>
    )
}

export default memo(PeopleDetailPage);