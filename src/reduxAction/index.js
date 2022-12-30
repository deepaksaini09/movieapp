import {
    changeNumber,
    changeMovieType,
    changeGenresType,
    changeYearsType,
    setMovieRating,
    setTopRated,
    setComingMovies, setSearchMovie, setActorName, setActorAPIData
} from "./upDown";
import {combineReducers} from "redux";

const rootReducer = combineReducers({changeNumber,changeMovieType,changeGenresType,changeYearsType,setMovieRating,setTopRated,setComingMovies,setSearchMovie,setActorName,setActorAPIData});
export  default rootReducer;