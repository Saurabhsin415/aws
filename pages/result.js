import axios from "../components/lib/axios";
import useSWR from "swr";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useState } from "react";
import { CollectionsOutlined } from "@mui/icons-material";
export default function LiveResult() {
  const address = 'liveupddate';
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(address, fetcher);

  if (error) <p>Loading failed...</p>;
  if (!data) return <Skeleton height={125} count={13} duration={10}/>;
 
  return (
<>


<div className="text-center py-3 text-family1 result-update">
<h3 style={{'marginBottom':'0px'}}>SATTA MATKA RESULTS</h3> 
 
 </div> 
 
<div style={{'height':'1547px'}}>
{data &&
          data.data.map((item,index) => (
            <div className={`content-wrap1 text-center result-div text-family2 ${item.highlight}`} key={index} style={{'height':'108px'}}>
<h2 className='text-color2'>{item.chartname}</h2>
<p className=''>{item && item.number && item.number.left_patti}-{item && item.number && item.number.jodi}-{item && item.number && item.number.right_patti}</p>
<p className='time'>[ {item && item.opentime && item.opentime} ] To [ {item && item.closetime && item.closetime} ]</p>
 </div>
          ))}
</div>

 
</>
 
  );
}