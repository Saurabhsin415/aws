

import Link from 'next/link';
import Typed from "react-typed";
import SlidePost from "./slidepost";
// import Accordion from "./accordion";
import Charts from './charts';
import Result from './result';
import Live from "./live.js";
import Head from 'next/head'
import {Helmet} from "react-helmet";
import Zone from "./zone";
// import Notification from "./notification";
import dynamic from 'next/dynamic';
import axios from "../components/lib/axios";
import Content from "./content";
const Accordion=dynamic(()=>import('./accordion'),{
  ssr: false,
})
export default function Home({chart,notify}) {
  console.log('asd')
  console.log(notify);
  return (
    <>
       <Head lang = "en">
  
                <meta charSet="utf-8" />
                <title>Dpboss | Satta Matka | Kalyan Market Result Site |</title>
       <meta name="description" content="Kalyan matka get - satta matka dpboss all market fastest matka result get fix matka number on kalyan matka site"></meta>
       <meta name="keywords" content="satta ratan, kalyan matka, matka ratan, sattamatka, satta matta matka, kalyan satta, satta matka kalyan, satta matta, sata matka, sattamataka143, matka result, satka matka, satta matka result, satta batta, kalyan matka result"/>
       <link rel="canonical" href="https://kalyanmatka.site"/>
       <meta name="google" content="notranslate"/>
       <meta name="google-site-verification" content="liTFtCXWaQpqiHqow3KSnI-19QPhOb81RWjiOBo1-YE"/>
       <meta content="yes" name="apple-mobile-web-app-capable"/>
       <meta content="yes" name="apple-touch-fullscreen"/>
       <meta name="Robots" content="index, follow"/>
       <meta name="author" content="ratan khatri"/>
       <meta name="copyright" content="kalyanmatka site"/>
       <meta property="og:type" content="website"/>
       <meta property="og:title" content="Satta Matka"/>
       <meta property="og:description" content="SattaMatka"/>
       <meta property="og:url" content="https://kalyanmatka.site"/>
       <link rel="apple-touch-icon" sizes="57x57" href="favicon/apple-icon-57x57.png"/>
       <link rel="apple-touch-icon" sizes="60x60" href="favicon/apple-icon-60x60.png"/>
       <link rel="apple-touch-icon" sizes="72x72" href="favicon/apple-icon-72x72.png"/>
       <link rel="apple-touch-icon" sizes="76x76" href="favicon/apple-icon-76x76.png"/>
       <link rel="apple-touch-icon" sizes="114x114" href="favicon/apple-icon-114x114.png"/>
       <link rel="apple-touch-icon" sizes="120x120" href="favicon/apple-icon-120x120.png"/>
       <link rel="apple-touch-icon" sizes="144x144" href="favicon/apple-icon-144x144.png"/>
       <link rel="apple-touch-icon" sizes="152x152" href="favicon/apple-icon-152x152.png"/>
       <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-icon-180x180.png"/>
       <link rel="icon" type="image/png" sizes="192x192"  href="favicon/android-icon-192x192.png"/>
       <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png"/>
       <link rel="icon" type="image/png" sizes="96x96" href="favicon/favicon-96x96.png"/>
       <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png"/>
       <link rel="manifest" href="favicon/manifest.json"/>  
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
  <div className="text-center py-3 text-family m-0"  dangerouslySetInnerHTML={{__html: notify}}>
   
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
<Zone/>
<div className="text-center py-3 text-family1 result-update">
<h3 style={{'marginBottom':'0px'}}>Jodi Chart</h3>
 </div>
 
      {/* {console.log(data)} */}
       
          {chart.map((item,index) => (
            <div className='content-wrap1 text-center text-family result-div div_link' key={index}>
            <Link href={`${item.chart_slug.toLowerCase()}-jodi-chart`}>
  <a className='link'>{`${item.chartname.toLowerCase()}`} Jodi Chart</a>
 </Link>
 </div>
          ))}


{/* <Charts/> */}
           {/* //panel chart */}
           <div className="text-center py-3 text-family1 result-update">
<h3 style={{'marginBottom':'0px'}}>Panel Chart</h3>
 </div>
      {/* {console.log(data)} */}
        
          {chart.map((item,index) => (

            <div className='content-wrap1 text-center text-family result-div div_link' key={index}>
 <Link href={`${item.chart_slug.toLowerCase()}-panel-chart`}>
  <a className='link'>{`${item.chartname.toLowerCase()}`} Panel Chart</a>
 </Link>
 </div>

          ))}
 {/* <Accordion/> */}
 <Content/>
    </>
    
  );
}


export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  try {
    const result = await axios.get('chart');
    const noti = await axios.get('notification');
    const data = result.data;
    const notification = noti.data;
    return {
        props: {
            chart: data.data,
            notify:notification.data
        }
    }
} catch (error) {
    console.log(error);
}
}
