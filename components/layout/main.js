import React, { useEffect, useState } from "react";
  
import Router from 'next/router'
import Link from "next/link";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import ForumIcon from '@mui/icons-material/Forum';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import HomeIcon from '@mui/icons-material/Home';
import { useRouter } from 'next/router'
const CommonLayout = ({ children}) => {
  const router = useRouter();
 const pathname=router.pathname;
 const reloadpage=()=>{
// console.log('asd');
  // console.log(window.scrollY);
  // Router.reload(window.location.pathname);
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
 
    <div className="header text-color1 ">KalyanMatka.<span className="text-color2">Site</span></div>
  <main>{children}</main>
  <div className='foot'>
 
  {/* <div></div> */}
 
  <div className="text-center py-3 text-family" style={{'lineHeight':'1.2'}}>
  <h1 className="fs-20">KalyanMatka.<span className="text-color2">Site</span></h1>
 </div>
 <p className="text-center footlink "><Link href={`/`}><a> Home</a></Link> | <Link href={`/about-us`}><a>About us</a></Link> | <Link href={`/about-us`}><a>Facebook</a></Link> | <Link href={`/about-us`}><a>Twitter</a></Link> | <Link href={`/about-us`}><a>Whatsapp</a></Link></p>
<p className="text-center">Copyright © 2022-23 <span className="text-color2">SS</span>. All Rights Reserved.</p>
 
</div>

{/* <div className="topdown">{showTopBtn?<FontAwesomeIcon icon={faArrowUp}  onClick={goToTop}/>:<FontAwesomeIcon icon={faArrowDown}  onClick={scrollToBottom}/>}</div> */}
<div className="topdown">{showTopBtn?<KeyboardDoubleArrowUpIcon  onClick={goToTop}/>:<KeyboardDoubleArrowDownIcon  onClick={scrollToBottom}/>}</div>
<div className="topdownload"><a href="base.apk"><img src="download.svg" alt="apkdownload"/></a></div>
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
<div style={{'cursor':'pointer','color':'#e70280'}} onClick={()=>window.location.reload()}>
  
    <RefreshIcon/> <span className="aspan">Refresh</span>
 
</div>
  </div>
 
    </>
  );
};

export default CommonLayout;
