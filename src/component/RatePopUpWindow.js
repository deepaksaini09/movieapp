import React, {memo, useState} from "react";
import {DialogContent,Dialog,DialogTitle,DialogActions} from "@mui/material";
import Star from "./Star";
import {FaStar} from "react-icons/fa";

function RatePopUpWindow(props){
    const [showDialog,setShowDialog] = useState(false);
    const openDialog =()=>{
        setShowDialog(true);
    }
    console.log('RatePopUpWindow')
    const closeDialog =(e)=>{
        setShowDialog(false);
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