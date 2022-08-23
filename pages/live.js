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
 {console.log(data && data.data.length)}
 {!data? <Skeleton height={143}/>:data &&
          data.data.map((item,index) => (
            <div className={`content-wrap1 text-center result-div text-family2 ${item.highlight}`} key={index} style={{'height':'143px'}}>

<h2 className='text-color2'>{item.chartname}</h2>
{item.liveersult?<p style={{'padding':'5px'}}>{item && item.liveersult && item.liveersult.left_patti}-{item && item.liveersult && item.liveersult.jodi}
{item && item.liveersult && item.liveersult.right_patti?'-'+item.liveersult.right_patti:''}</p>:<p>Loading...</p>}
  
 <p style={{'padding':'5px','fontSize':'18px','color':'blue'}}>{item && item.text_on==1 && item.text?item.text:''}</p>
 <a className="btn button" style={{'fontSize':'14px','width':'90px','height':'28px','fontWeight':'inherit'}} onClick={()=> window.location.reload()}>Refresh</a> 
 </div>
          ))}

 

 
</>
 
  );
}