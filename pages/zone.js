import * as React from 'react';
import Link from 'next/link';
export default function SimpleAccordion() {
  return (
    <>   
 <div>
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
  <a className='link-zone'>CHAT FORUM</a>
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
 


    </>
  );
}
