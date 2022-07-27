import React, { useState } from 'react';
import Link from 'next/link';
import Container from '@mui/material/Container';
import * as API from "../api/app"; 
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { toast } from "react-toastify";
import { INTERNALS } from 'next/dist/server/web/spec-extension/request';
const Users = () => {
const [loading,setLoading]=useState(false);
// TopUsers
      const { result, error } =API.TopUsers(); 
       if (error) return toast('Something went wrong!');
      if (!result) return <Box sx={{ display: 'flex' }}>
      <CircularProgress className="m-auto mt-20"/>
    </Box>;
 
    return (
      <>
      {console.log(result)}
        <div className=" py-20 text-center">
<div className="text-center py-3 text-family1 guessing-forum">
<h3 style={{'marginBottom':'0px'}}>Top 10 Users</h3> </div>
<Container maxWidth="lg" className="content-wrap2 py-20 text-center">
 {result && result.data.map((item,index)=>{
    return(<div className='d-flex justify-content-around top-users'>
   <div>{item.username}</div>
    <div>{item.count}</div>
    </div>
 )})}
    
 </Container>
 </div> 
      </>
    )
} 
export default Users;