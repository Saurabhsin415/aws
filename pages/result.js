import axios from "../components/lib/axios";
import useSWR from "swr";
import Link from 'next/link';
import { useRouter } from 'next/router'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
export default function LiveResult() {
  const address = 'liveupddate';
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(address, fetcher);

  if (error) <p>Loading failed...</p>;
  if (!data) <h1>Loading...</h1>;

  return (
<>


<div className="text-center py-3 text-family1 result-update">
<h3 style={{'marginBottom':'0px'}}>MATKA LIVE RESULTS</h3> 
 {/* <div className='text-color1'>Date:10/07/2022</div> */}
 </div> 

 {!data? <Box sx={{ display: 'flex' }}>
      <CircularProgress className="m-auto mt-20"/>
    </Box>:data &&
          data.data.map((item,index) => (
            <div className='content-wrap1 text-center result-div text-family2' key={index}>
        
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