import {
    changeNumber,
    changeMovieType,
    changeGenresType,
    changeYearsType,
    setMovieRating,
    setTopRated,
    setComingMovies, setSearchMovie
} from "./upDown";
import {combineReducers} from "redux";

const rootReducer = combineReducers({changeNumber,changeMovieType,changeGenresType,changeYearsType,setMovieRating,setTopRated,setComingMovies,setSearchMovie});
export  default rootReducer;