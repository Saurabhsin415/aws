

import Link from 'next/link';
import Typed from "react-typed";
import Head from 'next/head'
import dynamic from 'next/dynamic';
import axios from "../components/lib/axios";
const SlidePost=dynamic(()=>import('./slidepost'),{
  ssr: false,
});
const Result=dynamic(()=>import('./result'),{
  ssr: false,
});
const Live=dynamic(()=>import('./live.js'),{
  ssr: false,
});
const Zone=dynamic(()=>import('./zone.js'),{
  ssr: false,
});
const Content=dynamic(()=>import('./content'),{
  ssr: true,
});
export default function Home({chart,notify}) {  
  return (
    <>
       <Head>
  
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
        {/* <Live/> */}
      
<div className="text-center py-3 text-family1 result-update">
<h3 style={{'marginBottom':'0px','marginTop':'0px'}}>SATTA MATKA RESULTS</h3> 
 
 </div> 
 
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


export async function getStaticProps() {
 
  try {
    const result = await axios.get('chart');
    const noti = await axios.get('notification');
    const data = result.data;
    const notification = noti.data;
    return {
        props: {
            chart: data.data,
            notify:notification.data
        },
        revalidate: 10, // In seconds
    }
} catch (error) {
    console.log(error);
}
}
