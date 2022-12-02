export const incNumber =(num)=>{
    return {type:"INCREMENT",
            payload:num ,
    };
}

export const decNumber =(num)=>{
    return {type:"DECREMENT",
            payload:num,
    };
}
export const entertainmentType =(movieName)=>{
    return{
       type:'movie',
        movieType:movieName


    }
}
export  const genresType =(genres)=>{
    return{
        type:'genres',
        genres:genres
    }
}

export  const yearsType =(years)=>{
    return{
        type:'years',
        years:years
    }
}

