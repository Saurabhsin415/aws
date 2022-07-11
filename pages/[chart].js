import axios from "../components/lib/axios";
import useSWR from "swr";
import Link from 'next/link';
import { useRouter } from 'next/router'
// import JodiChart from "./charts/jodichart";
// import PanelChart from "./charts/PanelChart";
export default function Chats() {
   
    const router = useRouter();
    const id = router.query.chart;
    console.log(id)
  const address = id;
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(address, fetcher);

  if (error) <p>Loading failed...</p>;
  if (!data) <h1>Loading...</h1>;

  return (
    <div>
   {/* {console.log(data && data.data.result)} */}
    {/* //jodichart */}
{/* {data && data.chart=='panel'?<PanelChart name={id} data={data.data.result}/>:<JodiChart/>} */}
 
 
      </div>
 
  );
}