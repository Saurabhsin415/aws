import React, { useEffect, useState,Component,useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome,faRefresh,faUser,faUserCheck,faUserFriends } from '@fortawesome/free-solid-svg-icons'
import useSWR from "swr";
import axios from "../../components/lib/axios";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { ContrastOutlined } from "@mui/icons-material";
import 'react-loading-skeleton/dist/skeleton.css'

 
const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function ForumList() {
  const [loading,setLoading]=useState(false);
  const [cnt, setCnt] = useState(1)
  console.log(cnt);
  // const [page, setPage] = useState(1);
  // const { data, error } = useSWR(
  //   `guessing-forum?page=${cnt}`,
  //   fetcher
  // );

  const list = []
  // for (let i = 0; i < cnt; i++) {
    // 🚨 This is wrong! Commonly, you can't use hooks inside a loop.
    const { data } = useSWR(`guessing-forum?page=${cnt}`,fetcher);
    console.log(data && data.data);
    console.log(list);
    list.push(data && data.data);
console.log(list);
  // }
  useEffect(() => {
    console.log(list);
  if(typeof list[0] == 'undefined')
  {
   console.log('dd');
  
  }
  else{
    setLoading(true)
  }
  },[list]);

  
  

  return (
    <>
    {console.log(list)}
 
 { loading && list &&   typeof list[0] != 'undefined' && list[0].map((item,index)=>
 (
 <div className='guessing-content' key={index}>
<div className='guessing-heading clearfix'>
    <div className='float-left bold'><FontAwesomeIcon icon={faUser} /> {item.username}</div>
    <div className='float-right date'>{item.time}</div>

</div>
 
<div className="text-center py-3 text-capitalize" dangerouslySetInnerHTML={{__html: item.comment}}></div>  

<div className="clearfix guessing-footer">
  <div className="float-left">(Quote)</div>
  <div className="float-right"> </div>
</div>
 </div>
 )
 )}
 <button onClick={() => setCnt(cnt + 1)}>Load More</button>
    </>
    
  );
}