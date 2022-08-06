import axios from "../../components/lib/axios";
import useSWR from "swr";
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function ChartIndex() {
  const address = `chart`;
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(address, fetcher);

  if (error) <p>Loading failed...</p>;
  if (!data) <h1>Loading...</h1>;

  return (
    <div>
    {/* //jodichart */}
 <div className="text-center py-3 text-family1 result-update">
<h3 style={{'marginBottom':'0px'}}>Jodi Chart</h3>
 </div>
 
      {/* {console.log(data)} */}
        {!data?  <Skeleton height={200}/>:data &&
          data.data.map((item,index) => (
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
        {!data?  <Skeleton height={200}/>: data &&
          data.data.map((item,index) => (

            <div className='content-wrap1 text-center text-family result-div div_link' key={index}>
 <Link href={`${item.chart_slug.toLowerCase()}-panel-chart`}>
  <a className='link'>{`${item.chartname.toLowerCase()}`} Panel Chart</a>
 </Link>
 </div>

          ))}
      </div>
 
  );
}