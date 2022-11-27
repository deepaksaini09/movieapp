import {useState} from "react";

const initialValue = 11;
export function changeNumber(state = initialValue , action){
    switch (action.type){
        case "INCREMENT": return state+action.payload;
        case "DECREMENT": return state-action.payload;
        default: return state;
    }
}
console.log('init')
const movieName = 'all'
// const [data,setData] = useState([])
export function changeMovieType(state = movieName, action){
    switch (action.type){
        case 'movie': return {type:action.movieType,initData:[]};
        default : return {type:state,initData:[]};
    }
}
