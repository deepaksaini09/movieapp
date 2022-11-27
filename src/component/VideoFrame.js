import React, {memo, useState} from "react";
import {DialogContent,Dialog,DialogTitle,DialogActions} from "@mui/material";
import Star from "./Star";
import {FaStar} from "react-icons/fa";
import Student from "./Student";

function VideoFrame(props){
    const [showDialog,setShowDialog] = useState(false);
    const openDialog =()=>{
        setShowDialog(true);
    }
    console.log('videoFrmae')
    const closeDialog =(e)=>{
        setShowDialog(false);
    }
    return(

        <div>
             <div className={'text-center'} onClick={openDialog} style={{marginRight:"1px" ,border:"none",color:"blue",width:"100%",cursor:"pointer"}}>{props.trailer} </div>
            <Dialog open={showDialog} onClose={closeDialog}>
                 <DialogActions>
                    <button type={'submit'} onClick={closeDialog}><span style={{width:'20%'}}>X</span> </button>
                </DialogActions>
                {/*<DialogTitle style={{textAlign:"center",color:"blue"}}> Trailer</DialogTitle>*/}
                <DialogContent>
                   {/*<h4 style={{textAlign:"center"}}> {props.movieName} </h4>*/}
                    <Student video ={props.videLink}></Student>
                </DialogContent>

            </Dialog>
        </div>


)
}

export default memo(VideoFrame);