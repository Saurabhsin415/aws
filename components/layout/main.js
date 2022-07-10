import React, { useEffect, useState } from "react";
  
import Router from 'next/router'
 
 
const CommonLayout = ({ children, title, parent, subTitle }) => {
  const [link,setLink]=useState('');
 const [verified,setverified]=useState(1);
 const [token,settoken]=useState('');
 const [checkverify,setCheckverified]=useState();
  
 

  return (
    <>

    <div className="header text-color1 ">SattMatka.<span className="text-color2">Rocks</span></div>
  <main>{children}</main>

    </>
  );
};

export default CommonLayout;
