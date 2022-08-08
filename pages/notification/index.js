import React  from "react";
import * as API from "../api/app"; 
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { toast } from "react-toastify";
export default function Aboutus() {
    const { result, error } =API.Notification(); 
    if (error) return toast('Something went wrong!');
   if (!result) return <Box sx={{ display: 'flex' }}>
   <CircularProgress className="m-auto mt-20"/>
 </Box>;

  return (
    <>
   
 <div className="content-wrap1 text-center">
 
 <div className="text-center text-capitalize" dangerouslySetInnerHTML={{__html: result.data}}></div>
 
      </div>
   </>
    
  );
}