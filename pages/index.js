import Link from 'next/link';
import Typed from "react-typed";
import SlidePost from "./slidepost";
import Accordion from "./accordion";
import Charts from './charts';
import Result from './result';
import Live from "./live.js";
import Head from 'next/head'
export default function Home() {
  return (
    <>
       <Head>
       <title>KalyanMatka.site:matka result | live result | guessing forum | expert forum | chat forum</title>
       <meta name="description" content="Test your website with the free SEO check from Seobility and get tips for a better search engine optimization."></meta>

       
      </Head>
<div className='content-wrap'>
  <div className="text-center py-3 text-family">
  <span className='text-color1'>|</span>  <Link href={'https://sattamatka.rocks/'}><a className='text-color2 font-semibold mr-2'>Sattamatka</a></Link>
   <span className='text-color1'>| </span>  <Link href={'https://sattamatka.rocks/'}><a className='text-color2 font-semibold mr-2'>Dpboss</a></Link>
   <span className='text-color1'>|</span>  <Link href={'https://sattamatka.rocks/'}><a className='text-color2 font-semibold mr-2'>Sattamatkà</a></Link>
   <span className='text-color1'>|</span>  <Link href={'https://sattamatka.rocks/'}><a className='text-color2 font-semibold mr-2'>Kalyan Matka</a></Link>
   <span className='text-color1'>|</span>  <Link href={'https://sattamatka.rocks/'}><a className='text-color2 font-semibold mr-2'>Milan Bazar </a></Link>
   <span className='text-color1'>|</span>  <Link href={'https://sattamatka.rocks/'}><a className='text-color2 font-semibold mr-2'>SattamaMain Bazar</a></Link>

</div>
</div>

<div className='content-wrap1'>
 
  <div className="text-center text-family text-justify" style={{'lineHeight':'1.2'}}>
  Satta Matka Kalyan Main Mumbai Fastest Results
Get Kalyan Matka Main Mumbai Satta Matka Market Results Fastest Live Update. Get All Kalyan,Main Mumbai,Madhur Matka,Rajdhani,Milan,Madhur Matka And Time Bazar Jodi Penal Panel Patti Panna Charts For Free . All Matka Guessing.With Best Guessers , Online Old Charts , Satta Matka Number Software Links, Online Charts List Pdf Download And Top Matka Guessing Free Number Provided By Sattamatka143 Professor And Master Dr Admin Sir.
Other Special Features Include 220 Patti Satta Weekly Matka Jodi Chart With Direct Access To Guessing Form Of Experts Tricks Access Via Website

</div>
</div>

<div className='px-3 relative'>
<span className='bedage'>New</span>
  <div className="text-center py-3 text-family1 live-update">
<Typed
      strings={[
            "Live Update",
            "Sabse Tezz",
          ]}
          typeSpeed={150}
          backSpeed={30}
          loop
        /></div></div>
        <Live/>
      
      <Result/>
 
<SlidePost/>

 <div className='gamezone'>
<h3 style={{'marginBottom':'0px'}}>DAILY GAME ZONE</h3>
 </div>
 <div className='zone-menu'>
 <Link href="/guessing-form">
  <a className='link-zone'>GUESSING FORUM</a>
 </Link>
 <Link href="/expert-form">
  <a className='link-zone'>EXPERTS FORUM</a>
 </Link>
 <Link href="/chat-form">
  <a className='link-zone'>CHAT FORU M</a>
 </Link>
 </div>
{/*  
 <div className='content-wrap1 text-center text-family result-div div_link'>
 <Link href="/GUESSING FORUM">
  <a className='link'>FREE OPEN TO CLOSE ON PUBLIC DEMAND</a>
 </Link>
 </div>
 <div className='content-wrap1 text-center text-family result-div div_link' >
 <Link href="/GUESSING FORUM">
  <a className='link'>WEEKLY JODI AND PANNA</a>
 </Link>
 </div>
 <div className='content-wrap1 text-center text-family result-div div_link'>
 <Link href="/GUESSING FORUM">
  <a className='link'>100% FIX FREE GAME OPEN TO CLOSE AND LIFE TIME LOSS COVER GOLDEN CHART</a>
 </Link> */}
 {/* </div> */}
{/* 
 <div className="text-center py-3 text-family1 result-update">
<h3 style={{'marginBottom':'0px'}}>143 SPECIAL ZONE</h3>
 </div>
 <div className='content-wrap1 text-center text-family result-div div_link'>
 <Link href="/GUESSING FORUM">
  <a className='link'>ADMIN SIR EVERGREEN TRICK ZONE</a>
 </Link>
 </div>
 <div className='content-wrap1 text-center text-family result-div div_link'>
 <Link href="/GUESSING FORUM">
  <a className='link'>KALYAN AND MUMBAI OLD 1974 TO 2012 GOLDEN CHART</a>
 </Link>
 </div>
 <div className='content-wrap1 text-center text-family result-div div_link'>
 <Link href="/GUESSING FORUM">
  <a className='link'>KHATRI FAVOURITE PANNA CHART</a>
 </Link>
 </div> */}

<Charts/>
 <Accordion/>
    </>
    
  );
}