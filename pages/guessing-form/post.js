import React, { useEffect, useState,Component,useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome,faRefresh,faUser,faUserCheck,faUserFriends,faThumbsDown,faThumbsUp } from '@fortawesome/free-solid-svg-icons'
export default function ForumList({data}) {

const like=(e)=>
{
 
  console.log('afdsasf');
}

  return (
    <>
   {/* {console.log(data)}
 {data && data.map((item,index)=>
 ( */}
  <div className='guessing-content'>

<div className='guessing-heading clearfix'>
    <div className='float-left bold'><FontAwesomeIcon icon={faUser} /> {data.username}</div>
    <div className='float-right date'>{data.time}</div>

</div>
 
<div className="text-center py-3 text-capitalize" dangerouslySetInnerHTML={{__html: data.comment}}></div>  

<div className="clearfix guessing-footer">
  <div className="float-left" onclick={()=>setValue('kk')}>(Quote)</div>
  <a onclick={(e)=>like}>ccc</a>
  <div className="float-right"><span style={{'margin':'0px 8px 0px 0px','color':'#ec017d','cursor':'pointer'}} ><FontAwesomeIcon icon={faThumbsUp} /> </span><span style={{'margin':'0px 15px 0px 0px','color':'rgb(138 10 164)'}}><FontAwesomeIcon icon={faThumbsDown} /></span> </div>
</div>
 </div>
 {/* )
 )} */}
  
  
 
   </>
    
  );
}