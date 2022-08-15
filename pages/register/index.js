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
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal' ;
import MdPhone from '@mui/icons-material/Phone';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
const Register = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [successmg,setSuccessMsg]=useState('');
const [fname,setFname]=useState();
const [lname,setLname]=useState();
const [username,setUsername]=useState();
const [mobile_number,setMobileNumber]=useState();
const [password,setPassword]=useState();
const [loading,setLoading]=useState(false);
const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  background:'linear-gradient(119deg, #d0e5f9, #b4bfcb);',
  boxShadow: 24,
  borderRadius:'5px',
  p: 4,
};
const   submit=()=>{
 
    setLoading(true);
    let fd={fname,lname,username,mobile_number,password};
    const resp = API.UserRegistation(fd);
    resp.then(resp=>{
        console.log(resp);
        if(resp.data.status==true)
        {
            // toast.success(resp.data.message);
            setSuccessMsg(resp.data.data);
            // Cookies.set('auth_token',resp.data.token);
            handleOpen()
            // Router.push('guessing-form');
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
   <CssBaseline />
 {console.log(successmg)}
<Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
   
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
  
          </Typography>
          <div className="whats text-center">
           <h3>Register Successfully</h3>
           <p style={{'color':'#008a00'}}>Your Registration Has Been Successfully Completed.</p>
           <div > <img src="img/call-svgrepo-com.svg" width={25} alt="call"/> <span style={{'fontSize':'24px','color':'#1976d2'}}>+919876543219</span></div>
           <img src="img/whatsapp-svgrepo-com.svg" width={25} alt="call"/>
           
            <a style={{'fontSize':'24px','color':'#1976d2'}} 
            href={`https://api.whatsapp.com/send?phone=91${successmg.number}&text=Mobile No ${successmg.number} is ,Reg. Date-${successmg.date} at Time ${successmg.time} in website https://kalyanmatka.rocks`}>
           Whatsapp</a>
           
           <p>Id active </p>
   
          <hr></hr>
           <button className='btn click-btn emoji_img'  onClick={handleClose}>Close</button>
          </div>
        </Box>
      </Modal>


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