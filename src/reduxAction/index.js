import {changeNumber, changeMovieType, changeGenresType, changeYearsType, setMovieRating} from "./upDown";
import {combineReducers} from "redux";

const rootReducer = combineReducers({changeNumber,changeMovieType,changeGenresType,changeYearsType,setMovieRating});
export  default rootReducer;