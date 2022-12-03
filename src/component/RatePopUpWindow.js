import React, {memo, useState} from "react";
import {DialogContent,Dialog,DialogTitle,DialogActions} from "@mui/material";
import Star from "./Star";
import {FaStar} from "react-icons/fa";
import {setMovieRating} from "../reduxAction/upDown";
import {useSelector} from "react-redux";

function RatePopUpWindow(props){
    const [showDialog,setShowDialog] = useState(false);
    const rating = useSelector((state)=>state.setMovieRating)
    const openDialog =()=>{
        setShowDialog(true);
    }
    console.log('RatePopUpWindow')
    const closeDialog =(e)=>{
        setShowDialog(false);

         // k/////////////////////////////////////////////////////////// POST Request ///////////////////////////////

    // POST request
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
                        "movieID":props.movieID,
                        "rated":rating,
                        "user_name":"dk899097"
                })
                            };
    if(rating!==0){
    fetch('http://localhost:8000/rated-movie-users', requestOptions)
        .then(response => response.json())
        .then(data => console.log('response',data));}



    ////////////////////////////////// POST Request ///////////////////////////////////////////////////////////////////



    }

    return(

        <div>
             <FaStar keyPoints={1} onClick={openDialog} style={{marginRight:"1px" ,border:"none",color:"blue",cursor:"pointer"}}></FaStar>
            <Dialog open={showDialog} onClose={closeDialog}>

                <DialogTitle style={{textAlign:"center",color:"blue"}}> Give Rating</DialogTitle>
                <DialogContent>
                   <h4 style={{textAlign:"center"}}> {props.movieName} </h4>
                    <Star></Star>
                </DialogContent>
                <DialogActions>
                    <button type={'submit'} onClick={closeDialog}> Submit </button>
                </DialogActions>
            </Dialog>
        </div>


)
}

export default memo(RatePopUpWindow);