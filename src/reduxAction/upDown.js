import {useState} from "react";

const initialValue = 11;
export function changeNumber(state = initialValue , action){
    switch (action.type){
        case "INCREMENT": return state+action.payload;
        case "DECREMENT": return state-action.payload;
        default: return state;
    }
}
console.log('init-------------------------------------------------------')
const movieName = 'all'
const years = 'None'
const genres = 'None'
// const [data,setData] = useState([])
export function changeMovieType(state = movieName, action){
    switch (action.type){
        case 'movie': return action.movieType;
        default : return state;
    }
}

export function changeGenresType(state = genres, action){
    switch (action.type){
        case 'genres': return action.genres;
        default : return state;
    }
}

export function changeYearsType(state = years, action){
    switch (action.type){
        case 'years': return action.years;
        default : return state;
    }
}
const rating = 0;
export function setMovieRating(state= rating,action){
    switch (action.type){
        case 'rating': return action.rate;
        default :return 0;
    }
}


const top = 0;

export function setTopRated(state= top,action){
    switch (action.type){
        case 'top': return action.rate;
        default :return state;
    }
}

const coming =0;
export function setComingMovies(state= coming,action){
    switch (action.type){
        case 'coming': return action.coming;
        default :return state;
    }
}