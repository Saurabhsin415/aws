import axios from "../../components/lib/axios";
import useSWR from "swr";
import Link from 'next/link';

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
        {data &&
          data.data.map((item,index) => (
            <div className='content-wrap1 text-center text-family result-div div_link' key={index}>
            <Link href='/'>
  <a className='link'>{`${item.chartname.toLowerCase()}`}</a>
 </Link>
 </div>
          ))}
          {/* //panel chart */}
          <div className="text-center py-3 text-family1 result-update">
<h3 style={{'marginBottom':'0px'}}>Panel Chart</h3>
 </div>
      {/* {console.log(data)} */}
        {data &&
          data.data.map((item,index) => (

            <div className='content-wrap1 text-center text-family result-div div_link' key={index}>
 <Link href='/'>
  <a className='link'>{`${item.chartname.toLowerCase()}`}</a>
 </Link>
 </div>

          ))}
      </div>
 
  );
}