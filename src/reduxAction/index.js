import {changeNumber,changeMovieType} from "./upDown";
import {combineReducers} from "redux";

const rootReducer = combineReducers({changeNumber,changeMovieType});
export  default rootReducer;