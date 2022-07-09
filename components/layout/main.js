import React, { useEffect, useState } from "react";
import HeaderOne from "../header";
import Breadcrubs from "../widgets/breadcrubs";
import Helmet from "react-helmet";
import favicon from "../../public/assets/images/favicon/1.png";
import MasterFooter from "../footer/common/MasterFooter";
import Footer from "../footer";
import {AppSetting} from "../constants.ts";
import axios from "../lib/axios";
import Cookies from 'js-cookie'
import Router from 'next/router'
import Verify from "../../pages/account/verify";
import Layout from '../../components/layout/main';
const CommonLayout = ({ children, title, parent, subTitle }) => {
  const [link,setLink]=useState('');
 const [verified,setverified]=useState(1);
 const [token,settoken]=useState('');
 const [checkverify,setCheckverified]=useState();
  
  useEffect(()=>{
    setverified(Cookies.get('verified'));
    // console.log(Cookies.get('verified'));
    settoken(Cookies.get('auth_token'));
    // console.log(token);
  //  console.log(verified);
     // console.log(AppSetting.API_ACTION.ACTION_ADDRESSLIST);
     axios.get(AppSetting.API_ACTION.ACTION_PRODUCTLINK)
     .then(response =>  {  
      //  console.log(response.data);
       setLink(response.data)  }
       )
     .catch((error) => {
      //  toast.error(error); 
       });
       
       //verify account
       if(token)
       {
       axios.get(AppSetting.API_ACTION.ACTION_USERINFO).then(response=>{
        //  console.log(response.data.data.verify);
         setCheckverified(response.data.data.verify);
       }).catch((error)=>{
        Cookies.remove('auth_token');
        Cookies.remove('user_info');
        Router.push('/');
       })
      }
  },[token])

  return (
    <>
  <Helmet>
                <meta charSet="utf-8" />
                <title>NutraCharm</title>
                <link rel="canonical" href="nutracharm.com" />
                {/* <script src="https://checkout.razorpay.com/v1/checkout.js"></script> */}
                {/* <script src="https://kit.fontawesome.com/a076d05399.js"></script> */}
                <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
            </Helmet>
      <HeaderOne topClass="top-header" logoName="logo.png" />
      {title?
      <Breadcrubs title={title} parent={parent} subTitle={subTitle} />:''}
    {checkverify===0 ? <Verify/> : <main>{children}</main>}
      <MasterFooter
        footerClass={`footer-light `}
        footerLayOut={"light-layout upper-footer"}
        footerSection={"small-section border-section border-top-0"}
        belowSection={"section-b-space light-layout"}
        newLatter={true}
        link={link}
      /> 
 
    </>
  );
};

export default CommonLayout;
