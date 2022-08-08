import React, { useEffect, useState } from "react";
  
import Router from 'next/router'
import Link from "next/link";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import ForumIcon from '@mui/icons-material/Forum';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import HomeIcon from '@mui/icons-material/Home';
import {Helmet} from "react-helmet";
import Head from 'next/head'
import { useRouter } from 'next/router'
const CommonLayout = ({ children}) => {
  const router = useRouter();
 const pathname=router.pathname;
 const reload=()=>{
  window.location.reload();
 }
 const [showTopBtn, setShowTopBtn] = useState(false);
 useEffect(() => {
  window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
          setShowTopBtn(true);
      } else {
          setShowTopBtn(false);
      }
  });
}, []);
const goToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
};

const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
};

 
  return (
    <>
 
    <h1 className="header text-color1 ">KalyanMatka.<span className="text-color2">Site</span></h1>
  <main>{children}</main>
  <div className='foot'>
  <img src="/img/footer-bg.jpg" alt="footer" className='img1'/>
  {/* <div></div> */}
 
  <div className="text-center py-3 text-family" style={{'lineHeight':'1.2'}}>
  <h2>KalyanMatka.<span className="text-color2">Site</span></h2>
 </div>
 <p className="text-center footlink "><Link href={`/`}><a> Home</a></Link> | <Link href={`/about-us`}><a>About us</a></Link> | <Link href={`/about-us`}><a>Facebook</a></Link> | <Link href={`/about-us`}><a>Twitter</a></Link> | <Link href={`/about-us`}><a>Whatsapp</a></Link></p>
<p className="text-center">Copyright © 2022-23 <span className="text-color2">SS</span>. All Rights Reserved.</p>
 
</div>

{/* <div className="topdown">{showTopBtn?<FontAwesomeIcon icon={faArrowUp}  onClick={goToTop}/>:<FontAwesomeIcon icon={faArrowDown}  onClick={scrollToBottom}/>}</div> */}
<div className="topdown">{showTopBtn?<KeyboardDoubleArrowUpIcon  onClick={goToTop}/>:<KeyboardDoubleArrowDownIcon  onClick={scrollToBottom}/>}</div>
 
  <div className="footer text-color1">
<div className={pathname=='/'?'active':''}>
  <Link href={'/'}>
    <a><HomeIcon/> <span className="aspan">Home</span></a>
  </Link>

</div>
<div className={pathname=='/guessing-form'?'active':''}>
  <Link href={'/guessing-form'}>
    <a> <ForumIcon/><span className="aspan">Guessing</span></a>
  </Link>

</div>

<div className={pathname=='/chat-form'?'active':''}>
  <Link href={'/chat-form'}>
    <a>  <ForumIcon/> <span className="aspan">Chat</span></a>
  </Link>

</div>
<div className={pathname=='/expert-form'?'active':''}>
  <Link href={'/expert-form'}>
    <a><HowToRegIcon/><span className="aspan">Expert</span></a>
  </Link>

</div>
<div className="">
  
    <a onClick={()=>window.location.reload()} href='#'> <RefreshIcon/> <span className="aspan">Refresh</span></a>
 
</div>
  </div>
 
    </>
  );
};

export default CommonLayout;
