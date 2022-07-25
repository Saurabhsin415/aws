import React, { useEffect, useState,Component,useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome,faRefresh,faUser,faUserCheck,faUserFriends,faThumbsDown,faThumbsUp } from '@fortawesome/free-solid-svg-icons'
// import useSWR from "swr";
// import useSWRInfinite from 'swr/infinite'
import axios from "../../components/lib/axios";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import { ContrastOutlined } from "@mui/icons-material";
import 'react-loading-skeleton/dist/skeleton.css'
 
// import { number } from "yup";
// import Post from "./post";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
// import Button from '@mui/material/Button';
import { usePagination } from "../../components/lib/hooks";
 
 
const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function ForumList() {
  const like=(item)=>
  {
    console.log(item);
  }
 
  
  
const {loadingMore,isReachedEnd,error,size,setSize,paginatedPost}=usePagination('guessing-forum');
 
  return (
    <>
    {/* {console.log(paginatedPost)} */}
 {error && <p>something went wrong</p>}
 {!paginatedPost && <Box sx={{ display: 'flex' }}>
      <CircularProgress className="m-auto mt-20"/>
    </Box>}
 {paginatedPost?.map((item,index)=>
 (

  <div className='guessing-content' key={index}>

<div className='guessing-heading clearfix'>
    <div className='float-left bold'><FontAwesomeIcon icon={faUser} /> {item.username}</div>
    <div className='float-right date'>{item.time}</div>

</div>
 
<div className="text-center py-3 text-capitalize" dangerouslySetInnerHTML={{__html: item.comment}}></div>  

<div className="clearfix guessing-footer">
  <div className="float-left" onclick={()=>setValue('kk')}>(Quote)</div>
 
  <div className="float-right"><span style={{'margin':'0px 8px 0px 0px','color':'#ec017d','cursor':'pointer'}}  onClick={() => like(item)}><FontAwesomeIcon icon={faThumbsUp} /> </span><span style={{'margin':'0px 15px 0px 0px','color':'rgb(138 10 164)'}}><FontAwesomeIcon icon={faThumbsDown} /></span> </div>
</div>
 </div>
  
 )
 )}
  
 
  {loadingMore && <Box sx={{ display: 'flex' }}>
      <CircularProgress className="m-auto mt-20"/>
    </Box>}
  {!isReachedEnd  && <div className="text-center "><a class="btn button mt-10" onClick={()=>setSize(size+1)}>Load More</a></div>}
   </>
    
  );
}