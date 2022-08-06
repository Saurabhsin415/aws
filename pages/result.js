import axios from "../components/lib/axios";
import useSWR from "swr";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function LiveResult() {
  const address = 'liveupddate';
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(address, fetcher);

  if (error) <p>Loading failed...</p>;
  if (!data) <h1>Loading...</h1>;

  return (
<>


<div className="text-center py-3 text-family1 result-update">
<h3 style={{'marginBottom':'0px'}}>SATTA MATKA RESULTS</h3> 
 
 </div> 

 {!data? <Skeleton height={100}/>:data &&
          data.data.map((item,index) => (
            <div className={`content-wrap1 text-center result-div text-family2 ${item.highlight}`} key={index}>
        {console.log(item.highlight)}
<h2 className='text-color2'>{item.chartname}</h2>
<p className=''>{item && item.number && item.number.left_patti}-{item && item.number && item.number.jodi}-{item && item.number && item.number.right_patti}</p>
<p className='time'>[ {item && item.opentime && item.opentime} ] To [ {item && item.closetime && item.closetime} ]</p>
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