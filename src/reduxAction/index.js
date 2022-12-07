import {
    changeNumber,
    changeMovieType,
    changeGenresType,
    changeYearsType,
    setMovieRating,
    setTopRated,
    setComingMovies
} from "./upDown";
import {combineReducers} from "redux";

const rootReducer = combineReducers({changeNumber,changeMovieType,changeGenresType,changeYearsType,setMovieRating,setTopRated,setComingMovies});
export  default rootReducer;