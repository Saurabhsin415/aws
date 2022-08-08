import axios from "../components/lib/axios";
import useSWR from "swr";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function LiveResult() {
  const address = 'liveresult';
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(address, fetcher);

  if (error) <p>Loading failed...</p>;
  if (!data) <h1>Loading...</h1>;

  return (
<>
<div className="text-center  text-family1 result-update m-0">

 </div> 

 {!data? <Skeleton height={100}/>:data &&
          data.data.map((item,index) => (
            <div className={`content-wrap1 text-center result-div text-family2 ${item.highlight}`} key={index}>
   
<h2 className='text-color2'>{item.chartname}</h2>
{item.liveersult?<p style={{'padding':'5px'}}>{item && item.liveersult && item.liveersult.left_patti}-{item && item.liveersult && item.liveersult.jodi}
{item && item.liveersult?-item.liveersult.right_patti:''}</p>:<p>Loading...</p>}
  
 <p style={{'padding':'5px','fontSize':'18px'}}>{item && item.liveersult && item.liveersult.text?item.liveersult.text:''}</p>
 <a className="btn button" style={{'fontSize':'14px','width':'90px','height':'28px','fontWeight':'inherit'}} onClick={()=> window.location.reload()}>Refresh</a> 
 </div>
          ))}

{/* 

 <div className='content-wrap1 text-center text-family2 result-div'>
<h2 className='text-color2'>TIME BAZAR</h2>
<p className=''>222-66-178</p>
 </div>
 <div className='content-wrap1 text-center text-family2 result-div'>
<h2 className='text-color2'>MADHUR DAY</h2>
<p className=''>222-66-178</p>
 </div>
 <div className='content-wrap1 text-center text-family2 result-div'>
<h2 className='text-color2'>RAJDHANI DAY</h2>
<p className=''>222-66-178</p>
 </div>
 <div className='content-wrap1 text-center text-family2 result-div'>
<h2 className='text-color2'>MILAN DAY</h2>
<p className=''>222-66-178</p>
 </div> */}
</>
 
  );
}