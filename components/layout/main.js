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
 <Helmet>
                <meta charSet="utf-8" />
                <title>Sattamatka.rocks</title>
                <link rel="canonical" href="http://mysite.com/example" />
 
            </Helmet>
    <div className="header text-color1 ">SattMatka.<span className="text-color2">Rocks</span></div>
  <main>{children}</main>
  <div className='foot'>
  <img src="https://html.themexriver.com/Saasio/assets/img/port-img-31/footer-bg.jpg"  className='img1'/>
  {/* <div></div> */}
 
  <div className="text-center py-3 text-family">
  <h2>SattMatka.<span className="text-color2">Rocks</span></h2>
  <p>We strictly recommend you to please visit and browse this site on your own risk. All the information available here is strictly for informational purposes and based on astrology and numerology calculations. We are no way associated or affiliated with any illegal Matka or gambling business. We abide by rules and regulations of the regions where you are accessing the website. May be it is illegal or banned in your region. If you are using our website despite ban, you will be solely responsible for the damage or loss occurred or legal action taken. Please leave our website immediately if you dont like our disclaimer. Copying any information / content posted on the website is strictly prohibited and against the law.</p>
</div>
 
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
    <a> <ForumIcon/><span className="aspan">Guessing Forum</span></a>
  </Link>

</div>

<div className={pathname=='/chat-form'?'active':''}>
  <Link href={'/chat-form'}>
    <a>  <ForumIcon/> <span className="aspan">Chat Forum</span></a>
  </Link>

</div>
<div className={pathname=='/expert-form'?'active':''}>
  <Link href={'/expert-form'}>
    <a><HowToRegIcon/><span className="aspan">Expert Forum</span></a>
  </Link>

</div>
<div className="">
  
    <a onClick={reload}> <RefreshIcon/> <span className="aspan">Refresh</span></a>
 
</div>
  </div>
 
    </>
  );
};

export default CommonLayout;
