import {changeNumber,changeMovieType,changeGenresType,changeYearsType} from "./upDown";
import {combineReducers} from "redux";

const rootReducer = combineReducers({changeNumber,changeMovieType,changeGenresType,changeYearsType});
export  default rootReducer;