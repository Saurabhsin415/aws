import React, { useState } from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import * as API from "../api/app"; 
import { toast } from 'react-toastify';
import CircularProgress from '@mui/material/CircularProgress';
import Cookies from 'js-cookie'
import Router from 'next/router'
const Register = () => {
 
const [fname,setFname]=useState();
const [lname,setLname]=useState();
const [username,setUsername]=useState();
const [mobile_number,setMobileNumber]=useState();
const [password,setPassword]=useState();
const [loading,setLoading]=useState(false);

const   submit=()=>{
    setLoading(true);
    let fd={fname,lname,username,mobile_number,password};
    const resp = API.UserRegistation(fd);
    resp.then(resp=>{
        console.log(resp);
        if(resp.data.status==true)
        {
            toast.success(resp.data.message);
            // Cookies.set('auth_token',resp.data.token);
            Router.push('guessing-form');
        }
        if(resp.status==200)
        {
            toast.error(resp.data.error);
        }
        setLoading(false);
    
    })
    // console.log(resp);
}
    return (
      <>
        <div className=" py-20 text-center">
<div className="text-center py-3 text-family1 guessing-forum">
<h3 style={{'marginBottom':'0px'}}>Ragister</h3> 
<Container maxWidth="lg" className="content-wrap2 py-20 text-center">
<Box
      component="form"
      sx={{
        '& > :not(style)': { m:1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
 
    >
  
 <TextField id="standard-basic" className='line-height-0' label="First Name" variant="standard"  onChange={e=>setFname(e.target.value)}  />
 <TextField id="standard-basic" label="Last Name" variant="standard"  onChange={e=>setLname(e.target.value)}  />
 <TextField id="standard-basic" label="UserName" variant="standard"   onChange={e=>setUsername(e.target.value)} />  
 <TextField id="standard-basic" label="Mobile Number"
         variant="standard"   onChange={e=>setMobileNumber(e.target.value)}  />
          <TextField id="standard-basic" label="Password"
         variant="standard" type="password"  onChange={e=>setPassword(e.target.value)}  />


{loading? <Box sx={{ display: 'flex' }}>
      <CircularProgress className="m-auto mt-20"/>
    </Box>: <div className="text-center">   <a href="#" className="btn button" onClick={submit}>Submit</a></div>}

 
    </Box></Container>
 </div></div>
      </>
    )
} 
export default Register;