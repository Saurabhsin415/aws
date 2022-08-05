import React, { useEffect, useState,Component,useRef } from "react";
import * as API from "../api/app"; 
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { toast } from "react-toastify";
export default function Aboutus() {
    const { result, error } =API.AboutUs(); 
    if (error) return toast('Something went wrong!');
   if (!result) return <Box sx={{ display: 'flex' }}>
   <CircularProgress className="m-auto mt-20"/>
 </Box>;

  return (
    <>
   <div className="text-center py-3 text-family1 result-update" style={{'marginTop':'60px'}}>
    <h3 style={{'marginBottom':'0px','textTransform':'capitalize'}}>About Us</h3>
 </div>
 <div className="content-wrap1 py-20 text-center">
 {console.log(result.data)}
 <div className="text-center text-capitalize" dangerouslySetInnerHTML={{__html: result.data}}></div>
 
      </div>
   </>
    
  );
}