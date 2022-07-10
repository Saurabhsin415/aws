import React, { useEffect, useState } from "react";
  
import Router from 'next/router'
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome,faRefresh, } from '@fortawesome/free-solid-svg-icons'
 
const CommonLayout = ({ children, title, parent, subTitle }) => {
  const [link,setLink]=useState('');
 const [verified,setverified]=useState(1);
 const [token,settoken]=useState('');
 const [checkverify,setCheckverified]=useState();
  
 

  return (
    <>

    <div className="header text-color1 ">SattMatka.<span className="text-color2">Rocks</span></div>
  <main>{children}</main>
  <div className='foot'>
  <img src="https://html.themexriver.com/Saasio/assets/img/port-img-31/footer-bg.jpg"  className='img1'/>
  {/* <div></div> */}
 
  <div className="text-center py-3 text-family">
  Satta Matka Kalyan Main Mumbai Fastest Results
Get Kalyan Matka Main Mumbai Satta Matka Market Results Fastest Live Update. Get All Kalyan,Main Mumbai,Madhur Matka,Rajdhani,Milan,Madhur Matka And Time Bazar Jodi Penal Panel Patti Panna Charts For Free . All Matka Guessing.With Best Guessers , Online Old Charts , Satta Matka Number Software Links, Online Charts List Pdf Download And Top Matka Guessing Free Number Provided By Sattamatka143 Professor And Master Dr Admin Sir.
Other Special Features Include 220 Patti Satta Weekly Matka Jodi Chart With Direct Access To Guessing Form Of Experts Tricks Access Via Website

</div>
</div>
  <div className="footer text-color1">
<div className="active">
  <Link href={'/'}>
    <a><FontAwesomeIcon icon={faHome} /><span className="aspan">Home</span></a>
  </Link>

</div>
<div className="">
  <Link href={'/'}>
    <a><FontAwesomeIcon icon={faHome} /><span className="aspan">Guessing Form</span></a>
  </Link>

</div>

<div className="">
  <Link href={'/'}>
    <a><FontAwesomeIcon icon={faHome} /><span className="aspan">Chat Form</span></a>
  </Link>

</div>
<div className="">
  <Link href={'/'}>
    <a><FontAwesomeIcon icon={faHome} /><span className="aspan">Expert Form</span></a>
  </Link>

</div>
<div className="">
  <Link href={'/'}>
    <a> <FontAwesomeIcon icon={faRefresh} /><span className="aspan">Refresh</span></a>
  </Link>
</div>
  </div>
 
    </>
  );
};

export default CommonLayout;
