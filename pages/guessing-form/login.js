import React, { useEffect, useState,Component,useRef } from "react";
import Link from 'next/link';
import {Logout} from "../api/app"; 
import { toast } from "react-toastify";
import Cookies from 'js-cookie'
export default function Login({token,user}) {
 //logout
 {console.log(user)}
 if(user.status==2)
 {
  toast("Your account has been blocked"); 
  Cookies.remove('auth_token');
  Cookies.remove('user_info');
  window.location.reload();
 }
const logout=()=>{
    let result=Logout();
    result.then(response=>{
  // console.log(response);
      toast(response.data.message); 
      // setUser('');
      // settoken('');
      Cookies.remove('auth_token');
      Cookies.remove('user_info');
      window.location.reload();
    }).catch(error=>{
     console.log(error);
    })
  
  }

  return (
    <>
       {token?<div className="content-wrap1 py-20 text-center">
 <h2 className="text-uppercase m-0">hi, {user.username}</h2>
 <div className="text-center">  <a className="btn button" onClick={logout} >Logout</a> </div> 
      </div>
      :''}
     {token?'':<div className="content-wrap1 py-20 text-center">
 <h2 className="text-uppercase m-0">User Login</h2>
 <div className="text-center">  <Link href="login" ><a className="btn button" >Login</a></Link>  <Link href="register" ><a className="btn button">Register</a></Link></div>
 
      </div>}
 
   </>
    
  );
}