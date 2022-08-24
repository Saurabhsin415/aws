

import Link from 'next/link';
import Typed from "react-typed";
import Head from 'next/head'
import dynamic from 'next/dynamic';
import axios from "../components/lib/axios";
const SlidePost=dynamic(()=>import('./slidepost'),{
  ssr: false,
});

 
 
const Content=dynamic(()=>import('./content'),{
  ssr: true,
});
export default function Home({chart,notify,live,liveupdate}) {  
  {console.log(live)}
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
 Live Update
        
        </div></div>
 
          {liveupdate.map((item,index) => (
            <div className={`content-wrap1 text-center result-div text-family2 ${item.highlight}`} key={index} style={{'height':'143px'}}>

<h2 className='text-color2'>{item.chartname}</h2>
{item.liveersult?<p style={{'padding':'5px'}}>{item && item.liveersult && item.liveersult.left_patti}-{item && item.liveersult && item.liveersult.jodi}
{item && item.liveersult && item.liveersult.right_patti?'-'+item.liveersult.right_patti:''}</p>:<p>Loading...</p>}
  
 <p style={{'padding':'5px','fontSize':'18px','color':'blue'}}>{item && item.text_on==1 && item.text?item.text:''}</p>
 <a className="btn button" style={{'fontSize':'14px','width':'90px','height':'28px','fontWeight':'inherit'}} onClick={()=> window.location.reload()}>Refresh</a> 
 </div>
          ))}
      
<div className="text-center py-3 text-family1 result-update">
<h3 style={{'marginBottom':'0px','marginTop':'0px'}}>SATTA MATKA RESULTS</h3> 
 
 </div> 
 
      
        
 {live.map((item,index) => (
  <div className={`content-wrap1 text-center result-div text-family2 ${item.highlight}`} key={index} style={{'height':'108px'}}>
<h2 className='text-color2'>{item.chartname}</h2>
<p className=''>{item && item.number && item.number.left_patti}-{item && item.number && item.number.jodi}-{item && item.number && item.number.right_patti}</p>
<p className='time'>[ {item && item.opentime && item.opentime} ] To [ {item && item.closetime && item.closetime} ]</p>
 </div>
          ))}


<SlidePost/>
<div className="text-center py-3 text-family1 result-update">
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


export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

 
  try {
    const result = await axios.get('chart');
    const noti = await axios.get('notification');
    const live =await axios.get('liveupddate');
    const liveresult =await axios.get('liveresult');

    const data = result.data;
    const notification = noti.data;
    const update=live.data;
    
    return {
        props: {
            chart: data.data,
            notify:notification.data,
            live:update.data,
            liveupdate:liveresult.data.data
        },
    }
} catch (error) {
    console.log(error);
}
}
